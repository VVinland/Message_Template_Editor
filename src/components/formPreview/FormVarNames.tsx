import { FormVarNamesProps } from "../../interfaces";
import ControlledInput from "../controlledInput/ControlledInput";
import cl from './formVarNames.module.css';



const FormPreview = ({ values, onChange }: FormVarNamesProps) => {

    const valuesArray = Object.keys(values);


    return (
        <div className={cl.FVN}>
            {
                valuesArray.map(item => {
                    return (
                        <ControlledInput key={item} varName={item} onChange={onChange} />
                    )
                })
            }
        </div>
    )
}
export default FormPreview
