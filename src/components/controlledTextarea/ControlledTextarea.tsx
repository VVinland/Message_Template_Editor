import { RefObject, createContext, useContext, useEffect, useRef, useState } from 'react';
import cl from './controlledTextarea.module.css';
import { Context } from '../../pages/MessageTemplateEditor';
import useCurrentContext from '../../hooks/useCurrentContext';

interface ControlledTextareaProps {
    id: number
    defaulttext: string;
    rest?: any,
}


const ControlledTextarea = ({ id, defvalue, ...rest }: any) => {


    const [text, setText] = useState<string>(defvalue || '');

    const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const cloneTextareaRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [cursor, setCursor] = useState<null | number>(null);

    const { getId, getCursor, getText } = useCurrentContext();


    useEffect(() => {
        if (text === '' && defvalue !== undefined) {
            cloneTextareaRef.current.innerText = defvalue;
            textareaRef.current.style.height = 25 + cloneTextareaRef.current.clientHeight + "px";
        } else if (text !== '') {
            cloneTextareaRef.current.innerText = text;
            textareaRef.current.style.height = 25 + cloneTextareaRef.current.clientHeight + "px";
        } else {
            return;
        }
    }, [text])

    useEffect(() => {
        setText(defvalue);
    }, [defvalue])

    useEffect(() => {

        getId(id);
        getCursor(cursor);
        getText(text, id);

        textareaRef.current.focus({ preventScroll: false })
        const textarea = textareaRef.current;
        if (textarea) textarea.setSelectionRange(cursor, cursor);
    }, [textareaRef, cursor, text]);

    const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        setCursor(event.target.selectionStart);
        setText(event.target.value);

        getId(id);
        getCursor(cursor);

    }

    const handlerClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {


        if (event.target instanceof HTMLTextAreaElement) {
            setCursor(event.target.selectionStart);

            getId(id);
            getCursor(cursor);

        } else return;
    }

    const handlerOnKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if ((event.key === "ArrowLeft" || event.key === "ArrowRight"
            || event.key === "ArrowDown" || event.key === "ArrowUp")
            && event.target instanceof HTMLTextAreaElement) {

            setCursor(event.target.selectionStart);

            getId(id);
            getCursor(cursor);

        } else {
            return;
        }
    }

    return (
        <div className={cl.ControlledTextarea}>
            <textarea className={cl.ControlledTextarea_textarea}
                ref={textareaRef}
                value={text}
                onChange={handlerChange}
                onClick={handlerClick}
                onKeyUp={handlerOnKeyUp}
                {...rest}
                id={id}
            />
            <div className={cl.ControlledTextarea_cloneTextarea}
                defaultValue={text || defvalue}
                ref={cloneTextareaRef}
            ></div>
        </div>
    );
}

export default ControlledTextarea;

