import styled from 'styled-components'

export const ComboBoxInput = styled.input`
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #EFF1F2;
    margin: 1em;
    color: black;
    width: 8em;
`;

export const ComboBoxList = styled.ul`
    position: absolute;
    left: inherit;
    margin-left: 15px;
    width: inherit;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
    background-color: #EFF1F2;
    font-size: 14px;
    width: 8em;
`;

export const ComboBoxListItem = styled.li`
    padding: 0.75em 1em 0.75em 1em;
    color: #9399A6;

    &:hover {
        background-color: var(--blue);
        transition: ease 0.1s;
      }
`;