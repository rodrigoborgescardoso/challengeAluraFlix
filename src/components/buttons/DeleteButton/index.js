import styled from "styled-components";
import { VscTrash } from "react-icons/vsc";

const DeleteButton = styled(VscTrash)`
    color: var(--white-texts);
    height: 1.5rem;
    margin: 0 0.3125rem;
    width: 1.5rem;

    :hover {
        background-color: rgba(255, 255, 255, 0.3);
    }
`;

export default DeleteButton;