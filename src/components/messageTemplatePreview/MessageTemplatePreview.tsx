import { useEffect, useState } from 'react';
import ControlledTextarea from '../controlledTextarea/ControlledTextarea.tsx';
import {Values } from './../../interfaces.ts';
import FormPreview from '../formPreview/FormVarNames.tsx';
import { generateMessage } from '../../utils/helpers/functions.ts';
import cl from './messageTemplatePreview.module.css';

const MessageTemplatePreview = ({ arrVarNames, template, setVisible, visible }: any) => {

    const [message, setMessage] = useState('')
    const [values, setValues] = useState(fillValues);

    function fillValues() {
        let varNames: Values = {};
        for (let varName of arrVarNames) {
            varNames[varName] = '';
        }
        return varNames;
    }

    useEffect(() => {
        const mess = generateMessage(template, values)
        setMessage(mess);
    }, [values, visible])

    const handlerOnChange = (name: string, value: string) => {
        setValues({ ...values, [name]: value });
    }

    return (
        <div className={cl.MTP}>

            <h1 >Message Preview</h1>


            <ControlledTextarea disabled defvalue={message}/>

            <FormPreview
                values={values}
                onChange={handlerOnChange}
            />

            <button
                onClick={() => setVisible(false)}
            >
                Close
            </button>
        </div>
    );
}

export default MessageTemplatePreview;