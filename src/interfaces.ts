interface RouteItems {
    path: string;
    Component: (props: any) => JSX.Element, //подумать о смене типа props`a
}

interface ModalProps {
    visible: boolean;

    children?: JSX.Element
}

interface TextField {
    key: number;
    thisLink: number;

    name?: string;
    subTextFields?: any;
    nextTextField?: any;
    prevTextField?: any;
}

interface MessageTemplatePreviewProps {
    arrVarNames: Array<string>,
    template: any,
    setVisible: (value: boolean) => void;
}

export {
    type RouteItems,
    type TextField,
    type ModalProps,
    type MessageTemplatePreviewProps
}