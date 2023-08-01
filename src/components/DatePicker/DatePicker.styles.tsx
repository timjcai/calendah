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
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SelectedDateSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    background-color: var(--blue);
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    position: relative;
    padding-left: 2px;
    transition: background-color 5s ease;
`;

export const DefaultDateSpan = styled.span`
    pointer-events: none;
    transition: background-color 5s ease;
`;
