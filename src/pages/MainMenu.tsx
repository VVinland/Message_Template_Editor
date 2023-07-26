import { useNavigate } from "react-router-dom";
import "./../styles/btnMessage_Editor.css";
import { MESSAGE_TEMPLATE_EDITOR } from "../utils/consts";

const MainMenu = () => {

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