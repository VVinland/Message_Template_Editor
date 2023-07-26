import cl from "./../styles/page-MessageTemplateEditor.module.css";

const MessageTemplateEditor = (arrVarNames:Array<string>, template:any, callbackSave:any) => {

    return (

        <div className={cl.MTE_wrapper}>



            <div className={cl.MTE_headerAndTopButtons}>
                <h1 className={cl.MTE_headerAndTopButtons_header}>
                    Message Template Editor
                </h1>

                <div className={cl.MTE_headerAndTopButtons_arrVarNames}>
                    <button>template</button>
                    <button>template</button>
                    <button>template</button>
                    <button>template</button>
                </div>

                <button className={cl.MTE_headerAndTopButtons_ifThenElse}>
                    Add IF | THEN | ELSE
                </button>
            </div>


            <div className={cl.MTE_messageTemplate}>
                2
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