import styled from "styled-components";

export const StyledInput = styled.input<inputStylingProps>`
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    height: ${(props) => (props.size === "large" ? "15em" : "3em")};
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #eff1f2;
    pointer-events: ${(props) => props.pointerEvents};

    &:focus {
        outline: none;
    }
`;

export interface inputStylingProps {
    size?: string;
    width?: string;
    margin?: string;
    pointerEvents?: string;
}
