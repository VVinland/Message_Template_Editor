import { useNavigate } from "react-router-dom";
import { MESSAGE_TEMPLATE_EDITOR } from "../utils/consts";

import cl from './../styles/btnMessage_Editor.module.css';
import "./../styles/commonStyles.css";

const MainMenu = (): JSX.Element => {

    const navigate = useNavigate();

    const goMessageTemplateEditor = () => {
        navigate(MESSAGE_TEMPLATE_EDITOR);
    }

    return (
        <div className="App">
            <button
                className={cl.btnMessage_Editor}
                onClick={goMessageTemplateEditor}>
                Message Editor
            </button>
        </div>
    );
}

export default MainMenu;