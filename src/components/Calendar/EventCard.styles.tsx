import styled from "styled-components";

export interface CardWrapperProps {
    $height?: string;
    $top?: string;
    $left?: string;
    $bgcolor?: string;
    $zindex?: number;
    $active?: boolean;
    $width?: string;
    $pointerEvents?: boolean;
}

export const CardWrapper = styled.div<CardWrapperProps>`
    position: absolute;
    border-radius: 4px;
    border: ${(props) =>
        props.$active ? "2px solid white" : "1px solid grey"};
    font-size: 12px;
    margin-bottom: 1em;
    z-index: ${(props) => props.$zindex};
    overflow: hidden;
    width: ${(props) => (props.$width ? `${props.$width}` : `inherit`)};
    height: ${(props) => props.$height};
    top: ${(props) => props.$top};
    left: ${(props) => props.$left};
    background-color: ${(props) => props.$bgcolor};
    cursor: grab;
    pointer-events: ${(props) => (props.$pointerEvents ? "auto" : "none")};

    p {
        margin: 3px 0px 5px 5px;
        pointer-events: none;
    }
`;
