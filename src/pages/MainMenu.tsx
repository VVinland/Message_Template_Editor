import { useNavigate } from "react-router-dom";
import { MESSAGE_TEMPLATE_EDITOR } from "../utils/consts";
import { useEffect } from "react";
import "./../styles/btnMessage_Editor.css";

const MainMenu = (): JSX.Element => {

    const navigate = useNavigate();

    const goMessageTemplateEditor = () => {
        navigate(MESSAGE_TEMPLATE_EDITOR);
    }

    return (
        <div className="App">
            <button
                className="btnMessage_Editor"
                onClick={goMessageTemplateEditor}>
                Message Editor
            </button>
        </div>
    );
}

export default MainMenu;