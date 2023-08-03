import { ModalProps } from './../../interfaces.ts';
import cl from './modal.module.css';

const Modal = ({ children, visible }: ModalProps) => {

    const rootClasses = [cl.Modal];

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={cl.Modal_content} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;