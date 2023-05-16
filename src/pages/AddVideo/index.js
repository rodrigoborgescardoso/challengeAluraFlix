import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useErros from "hooks/useErrors";
import DataContext from "contexts/DataContext";
import { videoServices } from "services/video-services";
import MainContentContainer from "components/MainContentContainer";
import InputField from "components/InputField";
import DropDownList from "components/DropDownList";
import InputTextArea from "components/InputTextArea";
import MainButton from "components/buttons/MainButton";

const ButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    width: 100%;
    margin-right: 0.4rem;

    @media(min-width: 500px) {
        margin-right: 0;
    }
`;

const PrimaryButtons = styled(ButtonsContainer)`
    margin-bottom: 0;
    width: 12.5rem;
`;

const AddVideo = () => {

    const [title, setTitle] = useState('');
    const [urlVideo, setUrlVideo] = useState('');
    const [urlThumbnail, setUrlThumbnail] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const { dataVideos, setDataVideos, dataCategories } = useContext(DataContext);
    const [errors, validateFields, checkErrors] = useErros();

    const navigate = useNavigate();

    const newVideo = async (event) => {
        event.preventDefault();
        
        if(!checkErrors()) {
            return;
        }

            try {
                const response = await videoServices.addVideo(title, urlVideo, urlThumbnail, category, description);
                const data = response.data;
                setDataVideos([ ...dataVideos, data ]);
            }
            catch(error) {
                console.log(error);
            }
        
        setTitle('');
        setUrlVideo('');
        setUrlThumbnail('');
        setCategory('');
        setDescription('');
        navigate('/');
    };

    const goTo = (event) => {
        event.preventDefault();
        navigate('/addcategory');
    };

    const clearFields = (event) => {
        event.preventDefault();
        setTitle('');
        setUrlVideo('');
        setUrlThumbnail('');
        setCategory('');
        setDescription('');
    };

    return (
        <MainContentContainer title={'Novo vídeo'}>
            
            <form onSubmit={newVideo}>
                <InputField
                    label={'Título*'}
                    type={'text'}
                    value={title}
                    onChange={typedTitle => setTitle(typedTitle)}
                    placeholder={'Insira o título'}
                    required={true}
                    name={'title'}
                    onBlur={validateFields}
                    error={!errors.title.valid}
                    errorText={errors.title.text}
                />

                <InputField
                    label={'Link do vídeo*'}
                    type={'text'}
                    value={urlVideo}
                    onChange={typedUrl => setUrlVideo(typedUrl)}
                    placeholder={'Insira o link do vídeo'}
                    required={true}
                    name={'urlVideo'}
                    onBlur={validateFields}
                    error={!errors.urlVideo.valid}
                    errorText={errors.urlVideo.text}
                />

                <InputField
                    label={'Link da imagem de capa do vídeo'}
                    type={'text'}
                    value={urlThumbnail}
                    onChange={typedUrl => setUrlThumbnail(typedUrl)}
                    placeholder={'Insira o link da imagem de capa do vídeo'}
                    required={false}
                />

                <DropDownList
                    label={'Escolha uma categoria*'}
                    value={category}
                    onChange={pickedCategory => setCategory(pickedCategory)}
                    data={dataCategories}
                    placeholder={'Escolha uma categoria'}
                    required={true}
                    name={'category'}
                    onBlur={validateFields}
                    error={!errors.category.valid}
                    errorText={errors.category.text}
                />

                <InputTextArea
                    label={'Descrição'}
                    value={description}
                    onChange={typedDescription => setDescription(typedDescription)}
                    placeholder={'Insira uma descrição'}
                    required={false}
                />

                <ButtonsContainer>
                    <PrimaryButtons>
                        <MainButton variant={'primary'} >Salvar</MainButton>
                        <MainButton variant={'secondary'} onClick={clearFields} >Limpar</MainButton>
                    </PrimaryButtons>

                    <MainButton variant={'primary'} onClick={ goTo }>Nova categoria</MainButton>
                </ButtonsContainer>
            </form>
        </MainContentContainer>
    );
};

export default AddVideo;