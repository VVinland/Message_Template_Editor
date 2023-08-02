import { useEffect } from "react";
import If_Then_else from "../components/If_Then_Else/If_Then_Else.tsx";
import ControlledTextarea from "../components/controlledTextarea/ControlledTextarea.tsx";
import MessageTemplate from "../components/messageTemplate/MessageTemplate.tsx";
import { EditorProps } from "../types.ts";
import cl from "./../styles/page-MessageTemplateEditor.module.css";



const MessageTemplateEditor = ({ arrVarNames, template, callbackSave }: EditorProps): JSX.Element => {


    return (

        <div className={cl.MTE_wrapper}>

            <div className={cl.MTE_headerAndTopButtons}>
                <h1 className={cl.MTE_headerAndTopButtons_header}>
                    Message Template Editor
                </h1>

                <div className={cl.MTE_headerAndTopButtons_arrVarNames}>
                    {arrVarNames.map(item => {
                        return <button key={item}>{`{${item}}`}</button>
                    })}
                </div>

                <button className={cl.MTE_headerAndTopButtons_ifThenElse}>
                    Add IF | THEN | ELSE
                </button>
            </div>


            <div className={cl.MTE_messageTemplate}>
                <MessageTemplate
                    template={template}
                />
            </div>


            <div className={cl.MTE_btns_PreviewSaveClose}>
                <button>Preview</button>
                <button
                // onClick={saveMessageTemplate}
                >Save</button>
                <button>Close</button>
            </div>



        </div>
    );



}

export default MessageTemplateEditor; 