import ControlledInput from "../controlledInput/ControlledInput";
import cl from './formVarNames.module.css';

interface FormVarNamesProps {
    values: Object,
    onChange: any;
    setVisible: any
}

const FormPreview = ({ values, onChange, setVisible }: FormVarNamesProps) => {

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
