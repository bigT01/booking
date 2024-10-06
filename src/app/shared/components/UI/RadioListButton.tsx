import React, {AllHTMLAttributes, useState, useCallback} from 'react';
import {LabelForm} from "@/constants/interface";

type RadioListButtonProps = {
    RadioItems: LabelForm[],
    onSelectedRadio?: (RadioItem: LabelForm) => void
} & AllHTMLAttributes<HTMLDivElement>;

const RadioListButton = ({RadioItems, onSelectedRadio, ...props}: RadioListButtonProps) => {
    const [activeRadio, setActiveRadio] = useState<LabelForm>(RadioItems[0]);

    const handleRadioChange = useCallback((radio: LabelForm) => {
        setActiveRadio(radio);
        if (onSelectedRadio) {
            onSelectedRadio(radio);
        }
    }, [onSelectedRadio]);

    return (
        <fieldset {...props}>
            <legend className="sr-only">Radio List</legend>
            {RadioItems.map((radio) => (
                <div key={radio.id} className="flex gap-2 items-center cursor-pointer" onClick={() => handleRadioChange(radio)}>
                    <input type="radio" id={radio.id} checked={activeRadio.id === radio.id} onChange={() => handleRadioChange(radio)} className="hidden" />
                    <label
                        htmlFor={radio.id}
                        className="relative w-[16px] h-[16px] cursor-pointer shadow-inner rounded-full"
                        style={{ boxShadow: 'inset 0 0 0 1px #6E7491' }}
                    >
                        {activeRadio.id === radio.id && (
                            <span className="absolute w-[8px] h-[8px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full bg-purple-blue"></span>
                        )}
                    </label>
                    <span>{radio.label}</span>
                </div>
            ))}
        </fieldset>
    );
};

export default RadioListButton;
