import styled from "styled-components";

export const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    width: 280px;
    max-height: 358px;
`;

export const DPGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DPRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`;

export const DPCell = styled.div`
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
