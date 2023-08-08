import { useEffect, useRef, useState } from 'react';
import useCurrentContext from '../../hooks/useCurrentContext';
import { ControlledTextareaProps } from '../../interfaces';
import cl from './controlledTextarea.module.css';


const ControlledTextarea = ({ id, defvalue, ...rest }: any) => {

    const [text, setText] = useState<string>(defvalue || '');

    const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

    const cloneTextareaRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    const [cursor, setCursor] = useState<null | number>(null);

    const { getId, getCursor, getText } = useCurrentContext();


    //The height of the div(clone textarea) increases, the textarea increases relative to it
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
    }, [text, defvalue])


    //set initial value
    useEffect(() => {
        setText(defvalue);
    }, [defvalue])

    useEffect(() => {

        // send up-to-date data
        getCursor(cursor);
        getId(id!);
        getText(text, id!);

        const textarea = textareaRef.current;
        textarea.focus({ preventScroll: false })

        //set the actual cursor in the textarea
        if (textarea) textarea.setSelectionRange(cursor, cursor);
    }, [textareaRef, text, cursor]);


    const handlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCursor(event.target.selectionStart);
        setText(event.target.value);
    }

    const handlerClick = (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => {


        if (event.target instanceof HTMLTextAreaElement) {
            setCursor(event.target.selectionStart);

            //when clicked, transfer the data of the textarea that was clicked
            getId(id!);
            getCursor(cursor);
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
                {...rest}
            />
            <div className={cl.ControlledTextarea_cloneTextarea}
                defaultValue={text || defvalue}
                ref={cloneTextareaRef}
            ></div>
        </div>
    );
}

export default ControlledTextarea;

