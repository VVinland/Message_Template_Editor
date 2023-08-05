type EditorProps = {
    arrVarNames: Array<string>,
    template: any, // позже изменить на конкретный тип
    callbackSave: (templateMessage: any) => void,
}

type Field = {
    type: 'TextField' | 'If' | 'Then' | 'Else';
};


export {
    type EditorProps,
    type Field,
}