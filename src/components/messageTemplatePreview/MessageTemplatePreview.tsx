import { useId, useState } from 'react';
import ControlledTextarea from '../controlledTextarea/ControlledTextarea.tsx';
import { MessageTemplatePreviewProps } from './../../interfaces.ts';
import cl from './messageTemplatePreview.module.css';

const MessageTemplatePreview = ({ arrVarNames, template, setVisible }: MessageTemplatePreviewProps) => {

    const [value, setValue] = useState('!1dasdsadasdsadsadsadasdasdasdasdasddsadasdasdsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkjdasdsadsajdnsadkj9')


    return (
        <div className={cl.MTP}>

            <h1 >Message Preview</h1>

            <div className={cl.MTP_message}>
                <ControlledTextarea key={new Date().getMilliseconds() + 13} readOnly />
            </div>

            <div className={cl.MTP_arrVarNames}>
                <h1>Variables</h1>
                {arrVarNames.map((item, index) => {
                    return (
                        <div className={cl.MTP_varName} key={index}>
                            <span>{`{${item}}`}</span>
                            <ControlledTextarea placeholder={item} />
                        </div>
                    )
                })}
            </div>

            <button
                onClick={() => setVisible(false)}
            >
                Close
            </button>

        </div>
    );
}

export default MessageTemplatePreview;