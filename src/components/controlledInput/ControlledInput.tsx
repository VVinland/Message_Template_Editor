import { useId, useState } from "react";
import { ControlledInputProps } from "../../interfaces";
import cl from './controlledInput.module.css'



const ControlledInput = ({ varName, onChange }: ControlledInputProps) => {
    const id = useId();
    const [value, setValue] = useState('');

    const handlerOnChange = (name: string, value: string) => {

        setValue(value);
        onChange(name, value)
    }
    return (
        <div className={cl.CI}>
            <label htmlFor={id} className={cl.CI_label}>
                {varName}
            </label>
            <input
                className={cl.CI_input}
                name={varName}
                value={value}
                onChange={(event) => handlerOnChange(event.target.name, event.target.value)}
                id={id}
                autoComplete='off'
                placeholder={varName}
            />
        </div>
    );
}

export default ControlledInput;