import { createContext, useEffect, useState } from "react";
import MessageTemplate from "../components/messageTemplate/MessageTemplate.tsx";
import { EditorProps } from "../types.ts";
import cl from "./../styles/page-MessageTemplateEditor.module.css";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU } from "../utils/consts.tsx";
import Modal from "../components/modal/Modal.tsx";
import MessageTemplatePreview from "../components/messageTemplatePreview/MessageTemplatePreview.tsx";
import { calculateObjectById, deleteObjectById, splitStringInTwo, updateValueQueue } from "../utils/helpers/functions.ts";
import { ContextId, IQueue } from "../interfaces.ts";

export const Context = createContext<null | ContextId>(null);

const MessageTemplateEditor = ({ arrVarNames, template, callbackSave }: EditorProps): JSX.Element => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [queue, setQueue] = useState<Array<IQueue>>([]);
    const [currentId, setCurrentId] = useState<number>(0);
    const [currentCursor, setCurrentCursor] = useState<number | null>(0);

    useEffect(() => {
        if (!template) {
            setQueue([{
                id: new Date().getMilliseconds() + 1001,
                type: '',
                subLevel: null,
                nextTextFields: null,
                value: ''
            }])
        } else {
            setQueue([...template]);
        }
    }, [template])




    const add_IF_THEN_ELSE = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        // console.log(currentId);
        // console.log(currentCursor);

        let newQueue = calculateObjectById(queue, currentId, currentCursor);
        // console.log(newQueue instanceof Array);


        setQueue([...newQueue!]);
        setCurrentCursor(0); // затычка на начало строки для курсора
    }

    const delete_IF_THEN_ELSE = (id: number) => {
        let newQueue = deleteObjectById(queue, id, currentCursor);
        // console.log(id);
        // console.log(id);
        if (newQueue) setQueue([...newQueue])
    }


    const saveMessageTemplate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        callbackSave(queue);
    }

    const close = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigate(MAIN_MENU);
    }

    const getId = (id: number): void => {
        console.log(id);

        if (id === undefined || id === currentId) return;

        setCurrentId(id);
    }

    const getCursor = (cursor: number | null): void => {
        // console.log(cursor);

        if (cursor === null || cursor === currentCursor) return;

        setCurrentCursor(cursor);
    }

    // useEffect(()=>{
    //     updateValueQueue(queue, text, currentId);
    // },[text])

    const getText = (value: string, id: number) => {
        console.log(value, 'MTE value ');
        if (value === undefined) return

        updateValueQueue(queue, value, id);
    }

    const goPreview = () => {
        setVisible(true)
    }

    return (
        <Context.Provider value={
            {
                getId,
                getCursor,
                getText
            }
        }>
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
                        delete_IF_THEN_ELSE={delete_IF_THEN_ELSE}
                    />
                </div>


                <div className={cl.MTE_btns_PreviewSaveClose}>
                    <button onClick={goPreview}>
                        Preview
                    </button>

                    <Modal
                        visible={visible}

                    >
                        <MessageTemplatePreview
                            arrVarNames={arrVarNames}
                            template={queue}
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
        </Context.Provider>
    );



}

export default MessageTemplateEditor; 