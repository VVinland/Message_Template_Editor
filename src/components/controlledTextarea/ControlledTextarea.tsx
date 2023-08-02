import { RefObject, useEffect, useRef, useState } from 'react';
import cl from './controlledTextarea.module.css';



const ControlledTextarea = () => {

    const [text, setText] = useState<string>('');

    const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const cloneTextareaRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [cursor, setCursor] = useState<null | number>(null);

    useEffect(() => {
        if (!textareaRef || !cloneTextareaRef) {
            return;
        }
        const lengthTextarea = textareaRef.current.clientHeight;
        const lengthDiv = cloneTextareaRef.current.clientHeight

        cloneTextareaRef.current.innerText = text;

        if (lengthTextarea !== lengthDiv) {
            textareaRef.current.style.height = 5 + cloneTextareaRef.current.clientHeight + "px";
        };
    }, [text])

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) textarea.setSelectionRange(cursor, cursor);
    }, [textareaRef, cursor, text]);


    const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCursor(event.target.selectionStart);
        setText(event.target.value);
    }

    const handlerClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {

        if (event.target instanceof HTMLTextAreaElement) {
            setCursor(event.target.selectionStart);
        } else return;
    }

    const handlerOnKeyUp = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {

        if ((event.key === "ArrowLeft" || event.key === "ArrowRight"
            || event.key === "ArrowDown" || event.key === "ArrowUp")
            && event.target instanceof HTMLTextAreaElement) {

            setCursor(event.target.selectionStart);

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
            />
            <div className={cl.ControlledTextarea_cloneTextarea}
                ref={cloneTextareaRef}
            ></div>
        </div>
    );
}

export default ControlledTextarea;

