type EditorProps = {
    arrVarNames: Array<string>,
    template: any, // позже изменить на конкретный тип
    callbackSave: () => void,
}


export {
    type EditorProps,
}