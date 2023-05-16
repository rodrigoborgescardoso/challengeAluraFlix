import React, { useContext, useState } from "react";
import styled from "styled-components";
import MainContentContainer from "components/MainContentContainer";
import InputField from "components/InputField";
import InputTextArea from "components/InputTextArea";
import MainButton from "components/buttons/MainButton";
import Table from "components/Table";
import { categoryServices } from "services/category-services";
import DataContext from "contexts/DataContext";
import useErros from "hooks/useErrors";

const ButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    width: 55%;
`;

const PrimaryButtons = styled(ButtonsContainer)`
    margin-bottom: 0;
    width: 12.5rem;
`;

const AddCategory = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('#FFFFFF');
    const [editId, setEditId] = useState();
    const [editStatus, setEditStatus] = useState(false);

    const [errors, validateFields, checkErrors] = useErros();
    const { dataCategories, setDataCategories } = useContext(DataContext);

    const newCategory = async (event) => {
        event.preventDefault();
        
        if(!checkErrors()) {
            return;
        }

        if(!editStatus) {
            try {
                const response = await categoryServices.addCategory(title, description, color);
                const data = response.data;
                setDataCategories([ ...dataCategories, data ]);
            }
            catch(error) {
                console.log(error);
            }
        } else {
            try {
                const response = await categoryServices.updateCategory(editId, title, description, color);
                const data = response.data;
                setDataCategories(dataCategories.map( category => category.id === data.id ? data : category ));
                setEditStatus(false);
            }
            catch(error) {
                console.log(error);
            }
        }
        setTitle('');
        setDescription('');
        setColor('#FFFFFF');
    };

    const editCategory = async (id) => {
        setEditStatus(true);
        setEditId(id);
        try {
            const response = await categoryServices.detailsCategory(id);
            const data = response.data;
            setTitle(data.attributes.title);
            setDescription(data.attributes.description);
            setColor(data.attributes.color);
        }
        catch(error) {
            console.log(error)
        }
    };

    const deleteCategory = async (id) => {
        try {
            await categoryServices.removeCategory(id);
            setDataCategories(dataCategories.filter(category => category.id !== id));
        }
        catch(error) {
            console.log(error);
        }
    };

    const clearFields = (event) => {
        event.preventDefault();
        setTitle('');
        setDescription('');
        setColor('#FFFFFF');
    };

    const editCancel = () => {
        setEditStatus(false);
        setTitle('');
        setDescription('');
        setColor('#FFFFFF');
    };

    return (
        <MainContentContainer title={ editStatus ? 'Editar categoria' : 'Nova categoria' }>
            <form onSubmit={newCategory}>
                <InputField
                    label={'Título*'}
                    type={'text'}
                    value={title}
                    onChange={typedTitle => setTitle(typedTitle)}
                    placeholder={'Digite o título da categoria'}
                    required={true}
                    name={'title'}
                    onBlur={validateFields}
                    error={!errors.title.valid}
                    errorText={errors.title.text}
                />

                <InputTextArea
                    label={'Descrição'}
                    value={description}
                    onChange={typedDescription => setDescription(typedDescription)}
                    placeholder={'Digite uma descrição para a categoria'}
                    required={false}
                />

                <InputField
                    label={'Cor'}
                    type={'color'}
                    value={color}
                    onChange={typedColor => setColor(typedColor)}
                    required={true}
                />

                <ButtonsContainer>
                    <PrimaryButtons>
                        <MainButton variant={'primary'}>{editStatus ? 'Editar' : 'Salvar' }</MainButton>
                        <MainButton variant={'secondary'} onClick={clearFields} >Limpar</MainButton>
                    </PrimaryButtons>
                    { editStatus ? <MainButton onClick={editCancel} >Cancelar edição</MainButton> : '' }
                </ButtonsContainer>

                <Table editCategory={editCategory} deleteCategory={deleteCategory} />
            </form>
        </MainContentContainer>
    );
};

export default AddCategory;