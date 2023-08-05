import { Field } from './types.ts';

interface RouteItems {
    path: string;
    Component: (props: any) => JSX.Element, //подумать о смене типа props`a
}

interface ModalProps {
    visible: boolean;
    children?: JSX.Element
}

interface TextField {
    type: Field,
    subLevel?: Array<Object>;
}

interface MessageTemplatePreviewProps {
    arrVarNames: Array<string>,
    template: any,
    setVisible: (value: boolean) => void;
}

interface ContextId {
    getId: (id: number) => void,
    getCursor: (cursor: number | null) => void,
    getText: (value: string | '') => void
}

interface IQueue {
    type: string,
    id: number,
    subLevel: Array<IQueue> | null,
    nextTextFields: Array<IQueue> | null,
    value:string
}

export {
    type RouteItems,
    type TextField,
    type ModalProps,
    type MessageTemplatePreviewProps,
    type ContextId,
    type IQueue
}