import { EditorProps } from "../types.ts";
import cl from "./../styles/page-MessageTemplateEditor.module.css";



const MessageTemplateEditor = ({ arrVarNames, template, callbackSave }: EditorProps): JSX.Element => {

    console.log(template);
    
    if (template) {
        return (
            <div>Working!</div> //При налачии шаблона, запускать редактор по шаблону 
        )
    }


    return (

        <div className={cl.MTE_wrapper}>



            <div className={cl.MTE_headerAndTopButtons}>
                <h1 className={cl.MTE_headerAndTopButtons_header}>
                    Message Template Editor
                </h1>

                <div className={cl.MTE_headerAndTopButtons_arrVarNames}>
                    {arrVarNames.map(item=>{
                        return <button key={item}>{item}</button>
                    })}
                </div>

                <button className={cl.MTE_headerAndTopButtons_ifThenElse}>
                    Add IF | THEN | ELSE
                </button>
            </div>


            <div className={cl.MTE_messageTemplate}>
                2 {/**Сюда шаблон сообщения вставить */}
            </div>


            <div className={cl.MTE_btns_PreviewSaveClose}>
                <button>Preview</button>
                <button>Save</button>
                <button>Close</button>
            </div>



        </div>
    );



}

export default MessageTemplateEditor;