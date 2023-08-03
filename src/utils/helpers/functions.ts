const callbackSave = async (templateMessage: []) => {
    localStorage.setItem('template', JSON.stringify(templateMessage));
    return;
} // поддделать ассинхронность, но с начало определиться с шаблоном сообщения

const getArrVarNames = () => {
    const arrVarNames = localStorage.arrVarNames
        ? JSON.parse(localStorage.arrVarNames)
        : ['firstname', 'lastname', 'company', 'firstname', 'lastname', 'company', 'position', 'firstname', 'lastname', 'company', 'position', 'firstname', 'lastname', 'company', 'position', 'firstname', 'lastname', 'company', 'position', 'firstname', 'lastname', 'company', 'position', 'firstname', 'lastname', 'company', 'position']
    return arrVarNames;
}

const getTemplate = () => {
    let template = localStorage.getItem('template')
        ? localStorage.getItem('template')
        : null;

    return template;
}

// const getMessageTemplateStructure = (messageBranch) => {

// }

// const generateMessage = (template: [], values: object) => {

// }


export {
    callbackSave,
    getArrVarNames,
    getTemplate
}