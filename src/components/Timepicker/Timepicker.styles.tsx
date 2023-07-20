import styled from "styled-components";

export const ComboBoxInputBox = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    font-size: 14px;
    background-color: #eff1f2;
    margin: 1em;
    color: black;
    width: 9em;
`;

export const ComboBoxInput = styled.input`
    color: #495057;
    font-size: 14px;
    background-color: #eff1f2;
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    background-clip: padding-box;
    width: 7em;
    height: 3em;
`;

export const ComboBoxList = styled.ul`
    position: absolute;
    left: inherit;
    margin-left: 15px;
    width: inherit;
    max-height: 150px;
    overflow-y: auto;
    border: 1px solid #ccc;
    background-color: #eff1f2;
    font-size: 14px;
    width: 9em;
`;

export const ComboBoxListItem = styled.li`
    padding: 0.75em 1em 0.75em 1em;
    color: #9399a6;

    &:hover {
        background-color: var(--blue);
        transition: ease 0.1s;
    }
`;

export const StyledSelect = styled.select`
    border-radius: 5px;
    padding: 0.75em 1em 0.75em 1em;
    font-size: 14px;
    background-color: #eff1f2;
    margin: 1em;
    color: black;
    width: 8em;
`;

export const StyledOption = styled.option`
    background-color: #eff1f2;
`;

{
    /* <label className="combobox" role="combobox" aria-haspopup="listbox" aria-expanded="false" {...register(label)}>
<ComboBoxInput label={label} ref={btnRef} aria-controls="dropdownOptions" value={time} onClick={toggleDropDown} />
<ComboBoxList id="dropdownOptions" role="listbox" aria-label="Options" hidden={isHidden} onClick={selectTime}>
    {avaliableTimes.map((unittime)=>{
        return (<ComboBoxListItem key={unittime} role="option" value={unittime} onClick={selectTime}>{unittime}</ComboBoxListItem>);
    })}
</ComboBoxList>
</label> */
}
