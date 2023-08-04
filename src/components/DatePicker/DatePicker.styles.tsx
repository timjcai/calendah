import styled from "styled-components";

interface IDateBox {
    isopen?: boolean;
}

export const DateBox = styled.div<IDateBox>`
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    border: 1px solid white;
    border-radius: 6px;
    width: 280px;
    max-height: 360px;
    position: absolute;
    z-index: 5;
    display: ${(props) => (props.isopen ? "block" : "none")};
`;

export const DPNavbar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0px 14px;
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
    transition:;
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
    width: 28px;
    height: 28px;
    line-height: 24px;
    border-radius: 50%;
    position: relative;
    transition: background-color 5s ease;
`;

interface IDefaultDateSpan {
    color: string;
}

export const DefaultDateSpan = styled.span<IDefaultDateSpan>`
    pointer-events: none;
    transition: background-color 5s ease;
    color: ${(props) => props.color};
`;

export const DPNavButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 1px solid var(--shell-line);
    &:hover {
        background-color: var(--blue);
        color: white;
        transition: 0.3s ease;
    }
`;

export const StyledOpenButton = styled.button`
    padding: 8px 16px;
    border-radius: 6px;
    background-color: var(--blue);
    color: var(--shell-line);
    width: 180px;
`;

export const DatepickerWrapper = styled.div`
    width: fit-content;
`;
