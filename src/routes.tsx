import MainMenu from "./pages/MainMenu.tsx";
import MessageTemplateEditor from "./pages/MessageTemplateEditor.tsx";
import { MAIN_MENU, MESSAGE_TEMPLATE_EDITOR } from "./utils/consts.tsx"

const publicRoutes = [
    {
        path: MAIN_MENU,
        Component: MainMenu,
    },
    {
        path: MESSAGE_TEMPLATE_EDITOR,
        Component: MessageTemplateEditor,
    }
]

export {
    publicRoutes,
}