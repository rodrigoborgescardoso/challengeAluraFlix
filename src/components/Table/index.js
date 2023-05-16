import React, { useContext } from "react";
import styled from "styled-components";
import DataContext from "contexts/DataContext";
import EditButton from "components/buttons/EditButton";
import DeleteButton from "components/buttons/DeleteButton";

const CategoryTable = styled.table`
    margin-bottom: 3.5rem;
    width: 100%;
`;

const HeaderCell = styled.th`
    border: 2px solid gray;
    color: #FFFFFF;
    font-size: 1rem;
    font-weight: 500;
    line-height: 0.875rem;
    padding: 0.4rem;
    width: ${({size}) => size ? size : ''};

    @media(min-width: 500px) {
        font-size: 1.125rem;
        padding: 0.625rem;
    }
`;

const DataCell = styled.td`
    background-color: ${ ( {bgColor} ) => bgColor ? bgColor : '' };
    border: 2px solid gray;
    color: #FFFFFF;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.2rem;
    padding: 0.4rem;
    text-align: ${ ( {align} ) => align ? align : '' };

    @media(min-width: 500px) {
        font-size: 1.125rem;
        padding: 0.625rem;
    }
`;

const Table = ({ editCategory, deleteCategory }) => {

    const { dataCategories } = useContext(DataContext);

    return (
        <CategoryTable>
            <thead> 
                <tr>
                    <HeaderCell>Título</HeaderCell>
                    <HeaderCell size={'70%'}>Descrição</HeaderCell>
                    <HeaderCell>Cor</HeaderCell>
                    <HeaderCell>Editar</HeaderCell>
                    <HeaderCell>Remover</HeaderCell>
                </tr>
            </thead>
                <tbody>
                    {dataCategories.map(category =>
                        <tr key={category.id}>
                            <DataCell>{category.attributes.title}</DataCell>
                            <DataCell>{category.attributes.description}</DataCell>
                            <DataCell bgColor={category.attributes.color}></DataCell>
                            <DataCell align={'center'}><EditButton onClick={() => editCategory(category.id)} /></DataCell>
                            <DataCell align={'center'}><DeleteButton onClick={() => deleteCategory(category.id)} /></DataCell>
                        </tr>
                    )}
                </tbody>
        </CategoryTable>
    );
};

export default Table;