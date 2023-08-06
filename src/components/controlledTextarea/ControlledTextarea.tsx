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


    const [text, setText] = useState<string>(defvalue); // Текст что-то кого-то аааааа

    const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const cloneTextareaRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [cursor, setCursor] = useState<null | number>(null);

    const { getId, getCursor, getText } = useCurrentContext();


    useEffect(() => {
        if ((text === '' || text === undefined) && (defvalue !== '' && defvalue !== undefined)) {
            setText(defvalue)
            getText(defvalue, id);
        }
    }, [defvalue])

    useEffect(() => {


        if (text === '') {
            cloneTextareaRef.current.innerText = defvalue;
            textareaRef.current.style.height = 5 + cloneTextareaRef.current.clientHeight + "px";
        } else {
            cloneTextareaRef.current.innerText = text;
            textareaRef.current.style.height = 5 + cloneTextareaRef.current.clientHeight + "px";
        }

        // cloneTextareaRef.current.innerText = text;

        // console.log(cloneTextareaRef.current.innerText);

        // if (cloneTextareaRef.current.innerText === '') return;
        // else {
        //     textareaRef.current.style.height = 25 + cloneTextareaRef.current.clientHeight + "px";
        //     // cloneTextareaRef.current.innerHTML = '';
        // }

        // if (!textareaRef || !cloneTextareaRef) {
        //     return;
        // }
        // const lengthTextarea = textareaRef.current.clientHeight;
        // const lengthDiv = cloneTextareaRef.current.clientHeight

        // // cloneTextareaRef.current.innerText = text;

        // if (lengthTextarea !== lengthDiv) {
        //     textareaRef.current.style.height = 5 + cloneTextareaRef.current.clientHeight + "px";
        // };
    }, [text])


    // useEffect(() => {

    //     getText(text, id);
    //     // setText('');
    // }, [id])

    useEffect(() => {
        // console.log(cursor);

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
        getText(text, id);


    }

    const handlerClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {
        if (event.target instanceof HTMLTextAreaElement) {
            const a = event.target as HTMLTextAreaElement;
            setCursor(event.target.selectionStart);
            getId(id);
            getCursor(cursor);
            getText(text, id);

        } else return;
    }

    const handlerOnKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if ((event.key === "ArrowLeft" || event.key === "ArrowRight"
            || event.key === "ArrowDown" || event.key === "ArrowUp")
            && event.target instanceof HTMLTextAreaElement) {

            setCursor(event.target.selectionStart);
            getId(id);
            getCursor(cursor);
            getText(text, id);

        } else {
            return;
        }
    }

    return (
        <div className={cl.ControlledTextarea}>
            <textarea className={cl.ControlledTextarea_textarea}
                ref={textareaRef}
                value={text || defvalue}
                onChange={handlerChange}
                onClick={handlerClick}
                onKeyUp={handlerOnKeyUp}
                {...rest}
                id={id}
                defaultValue={defvalue}
            />
            <div className={cl.ControlledTextarea_cloneTextarea}
                defaultValue={text || defvalue}
                ref={cloneTextareaRef}
            ></div>
        </div>
    );
}

export default ControlledTextarea;

