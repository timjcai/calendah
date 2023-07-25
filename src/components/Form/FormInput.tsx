import React from "react";
import { useFormContext } from "react-hook-form";
import { iconMapping } from "../../Mapping";
import { StyledLabel } from "./Form.styles";
import { StyledInput } from "../common/Input";
import { Icon } from "../common/Icon";

export const FormInputText = ({
    label,
    size = "small",
    margin = "1em",
    defaultValue = `No ${label}`,
    readOnly = false,
    pointerEvents = "auto",
}) => {
    const icon = iconMapping[label];
    const { register } = useFormContext();

    return (
        <StyledLabel direction={"row"}>
            <Icon icon={icon} color={"#73767A"} />
            <StyledInput
                placeholder={`Add ${label}`}
                width={"88%"}
                size={size}
                margin={margin}
                defaultValue={defaultValue}
                {...register(label)}
                readOnly={readOnly}
                pointerEvents={pointerEvents}
            />
        </StyledLabel>
    );
};
