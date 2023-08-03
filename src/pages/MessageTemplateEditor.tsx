import { useEffect, useState } from "react";
import If_Then_else from "../components/If_Then_Else/If_Then_Else.tsx";
import ControlledTextarea from "../components/controlledTextarea/ControlledTextarea.tsx";
import MessageTemplate from "../components/messageTemplate/MessageTemplate.tsx";
import { EditorProps } from "../types.ts";
// import { TextField } from './../interfaces.ts';+
import cl from "./../styles/page-MessageTemplateEditor.module.css";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU } from "../utils/consts.tsx";
import Modal from "../components/modal/Modal.tsx";
import MessageTemplatePreview from "../components/messageTemplatePreview/MessageTemplatePreview.tsx";
import { getArrVarNames, getTemplate } from "../utils/helpers/functions.ts";


const MessageTemplateEditor = ({ arrVarNames, template, callbackSave }: EditorProps): JSX.Element => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [queue, setQueue] = useState<Array<Object>>([]);

    useEffect(() => {
        if (!template) {
            setQueue([...queue, {
                key: new Date().getDate(),
                type: "TextField",
                value: ''
            }])
        } else {
            setQueue(template);
        }
    }, [])


    const add_IF_THEN_ELSE = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        setQueue([...queue, {
            type: "If_Then_Else",
            value: ''
        }]);

    }

    const saveMessageTemplate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        callbackSave(queue);
    }

    const close = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigate(MAIN_MENU);
    }

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

                <button className={cl.MTE_headerAndTopButtons_ifThenElse}
                    onClick={add_IF_THEN_ELSE}

                >
                    Add IF | THEN | ELSE
                </button>
            </div>


            <div className={cl.MTE_messageTemplate}>
                <MessageTemplate
                    queue={queue}
                />
            </div>


            <div className={cl.MTE_btns_PreviewSaveClose}>
                <button onClick={() => setVisible(true)}>
                    Preview
                </button>

                <Modal
                    visible={visible}

                >
                    <MessageTemplatePreview
                        arrVarNames={getArrVarNames()}
                        template={getTemplate()}
                        setVisible={setVisible}
                    />
                </Modal>

                <button
                    onClick={saveMessageTemplate}
                >Save</button>
                <button
                    onClick={close}
                >Close</button>
            </div>



        </div >
    );



}

export default MessageTemplateEditor; 