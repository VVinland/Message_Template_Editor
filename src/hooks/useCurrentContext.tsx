import { useContext } from "react";
import { Context } from "../pages/MessageTemplateEditor";
import { ContextId } from "../interfaces";

const useCurrentContext = () => {
    const currentContext= useContext(Context);
    if (!currentContext) {
        throw new Error(
            'useCurrentContext has to be used within <Context.Provider>'
        )
    }
    return currentContext;
}

export default useCurrentContext;