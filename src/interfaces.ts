interface RouteItems {
    path: string;
    Component: (props: any) => JSX.Element, //подумать о смене типа props`a
}

export {
    type RouteItems,
}