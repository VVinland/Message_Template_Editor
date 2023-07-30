const callbackSave = async (templateMessage: any) => {
    localStorage.setItem('template', JSON.stringify(templateMessage));
    return;
} // поддделать ассинхронность, но с начало определиться с шаблоном сообщения

const getArrVarNames = () => {
    const arrVarNames = localStorage.arrVarNames
        ? JSON.parse(localStorage.arrVarNames)
        : ['firstname', 'lastname', 'company', 'position']
    return arrVarNames;
}

const geTemplate = () => {
    const template = localStorage.getItem('template')
        ? localStorage.getItem('template')
        : null;

    return template;
}

export {
    callbackSave,
    getArrVarNames,
    geTemplate
}