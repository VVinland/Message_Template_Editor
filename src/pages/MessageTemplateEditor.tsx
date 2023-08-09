import { createContext, useEffect, useState } from "react";
import MessageTemplate from "../components/messageTemplate/MessageTemplate.tsx";
import uuid from 'react-uuid';
import { EditorProps } from "../types.ts";
import { useNavigate } from "react-router-dom";
import { MAIN_MENU } from "../utils/consts.tsx";
import Modal from "../components/modal/Modal.tsx";
import MessageTemplatePreview from "../components/messageTemplatePreview/MessageTemplatePreview.tsx";
import { insertObjectById, deleteObjectById, updateValueStructureTemplate, insertVarName } from "../utils/helpers/functions.ts";
import { ContextId, StructureTemplate } from "../interfaces.ts";
import cl from "./../styles/page-MessageTemplateEditor.module.css";

export const Context = createContext<null | ContextId>(null);

const MessageTemplateEditor = ({ arrVarNames, template, callbackSave }: EditorProps): JSX.Element => {
    
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false); // open/close Modal

    // Template-related manipulations occur in the structure template
    const [structureTemplate, setStructureTemplate] = useState<Array<StructureTemplate>>(fillStructureTemplate);

    //current values
    const [currentId, setCurrentId] = useState<string>('');
    const [currentCursor, setCurrentCursor] = useState<number | null>(0);

    function fillStructureTemplate() {

        let temporaryTemplate = localStorage.template;

        if (temporaryTemplate) {
            return JSON.parse(temporaryTemplate);
        }

        return [{
            id: uuid(),
            type: '',
            subLevel: null,
            nextTextFields: null,
            value: ''
        }]
    }

    const add_IF_THEN_ELSE = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        let newStructureTemplate = insertObjectById(structureTemplate, currentId, currentCursor);

        setStructureTemplate([...newStructureTemplate!]);

        // resetting the current value is needed when, when adding if then else,
        // the cursor moved to the beginning of the line
        setCurrentCursor(0);
    }

    const delete_IF_THEN_ELSE = (id: string) => {
        let newStructureTemplate = deleteObjectById(structureTemplate, id, currentCursor);

        setStructureTemplate([...newStructureTemplate!])
    }


    const saveMessageTemplate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        callbackSave(structureTemplate);
    }

    const close = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        navigate(MAIN_MENU);
        callbackSave(structureTemplate);
    }

    const getId = (id: string | undefined): void => {

        if (id === undefined || id === currentId) return;

        setCurrentId(id);
    }

    const getCursor = (cursor: number | null): void => {

        if (cursor === null || cursor === currentCursor) return;

        setCurrentCursor(cursor);
    }

    const getText = (value: string, id: string | undefined) => {

        if (value === undefined || id === undefined) return

        updateValueStructureTemplate(structureTemplate, value, id);
    }

    const goPreview = () => {
        setVisible(true)
    }

    const insertVarTemplate = (varName: string) => {
        const newStructureTemplate = insertVarName(structureTemplate, currentId, currentCursor, varName)
        setStructureTemplate([...newStructureTemplate!]);
    }

    return (
        <Context.Provider value={
            {
                getId,
                getCursor,
                getText,
            }
        }>
            <div className={cl.MTE_wrapper}>

                <div className={cl.MTE_headerAndTopButtons}>
                    <h1 className={cl.MTE_headerAndTopButtons_header}>
                        Message Template Editor
                    </h1>

                    <div className={cl.MTE_headerAndTopButtons_arrVarNames}>
                        {arrVarNames.map(item => {
                            return <button
                                onClick={() => insertVarTemplate(item)}
                                key={item}
                            >{`{${item}}`}</button>
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
                        structureTemplate={structureTemplate}
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
                            template={structureTemplate}
                            setVisible={setVisible}
                            visible={visible}
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
};

export default MessageTemplateEditor; 