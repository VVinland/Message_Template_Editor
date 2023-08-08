import { Field } from './types.ts';

interface RouteItems {
    path: string;
    Component: (props: any) => JSX.Element,
}

interface ModalProps {
    visible: boolean;
    children?: JSX.Element
}

interface TextField {
    type: Field,
    subLevel?: Array<StructureTemplate>;
}

interface MessageTemplatePreviewProps {
    arrVarNames: Array<string>,
    template: Array<StructureTemplate>,
    setVisible: (value: boolean) => void;
}

interface ContextId {
    getId: (id: string) => void,
    getCursor: (cursor: number | null) => void,
    getText: (value: string | '', id: string) => void,
}

interface StructureTemplate {
    type: string,
    id: string,
    subLevel: Array<StructureTemplate> | null,
    nextTextFields: Array<StructureTemplate> | null,
    value: string
}

interface Values {
    [key: string]: string;
}

interface ControlledTextareaProps {
    id?: string
    defvalue: string;
    rest?: any,
}

interface If_Then_ElseProps {
    type: string;
    id: string;
    defvalue: string,
}

interface MessageTemplateProps {
    structureTemplate: Array<object>,
    delete_IF_THEN_ELSE: (id: string) => void;
}

interface FormVarNamesProps {
    values: Object,
    onChange: (name: string, value: string) => void;
}

interface ControlledInputProps {
    varName: string,
    onChange: (name: string, value: string) => void;
}

export {
    type RouteItems,
    type TextField,
    type ModalProps,
    type MessageTemplatePreviewProps,
    type ContextId,
    type StructureTemplate,
    type Values,
    type ControlledTextareaProps,
    type If_Then_ElseProps,
    type MessageTemplateProps,
    type FormVarNamesProps,
    type ControlledInputProps
}