import { StructureTemplate } from "./interfaces";

type EditorProps = {
    arrVarNames: Array<string>,
    template: Array<StructureTemplate>, 
    callbackSave: (template: Array<StructureTemplate>) => void,
}

type Field = {
    type: 'TextField' | 'If' | 'Then' | 'Else';
};


export {
    type EditorProps,
    type Field,
}