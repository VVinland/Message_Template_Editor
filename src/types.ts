type EditorProps = {
    arrVarNames: Array<string>,
    template: any, // позже изменить на конкретный тип
    callbackSave: (templateMessage:any) => void,
}


export {
    type EditorProps,
}