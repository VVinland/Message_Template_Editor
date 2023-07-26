import MainMenu from "./pages/MainMenu.js";
import MessageTemplateEditor from "./pages/MessageTemplateEditor.js";
import { MAIN_MENU, MESSAGE_TEMPLATE_EDITOR } from "./utils/consts.js"

const publicRoutes = [
    {
        path: MAIN_MENU,
        Component: MainMenu
    },
    {
        path: MESSAGE_TEMPLATE_EDITOR,
        Component: MessageTemplateEditor
    }
]

export {
    publicRoutes,
}