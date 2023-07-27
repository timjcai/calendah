import styled from "styled-components";

// Settings Page Divs

export const BackgroundWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: grey;
`;

export const CenteredWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    background: rgba(255, 255, 255, 0.49);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(14.9px);
    -webkit-backdrop-filter: blur(14.9px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    max-width: 1150px;
    width: calc(100vw - 300px);
    height: calc(100vh - 300px);
`;

export const ContentSection = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
    position: relative;
    height: 100%;
    background: var(--background-grey);
    padding: 36px 60px;
    overflow: hidden;
`;

// Setting Section Divs

export const SettingsBlockRow = styled.div`
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 320px;
`;

export const RowSpacer = styled.div`
    margin-bottom: 1em;
`;
