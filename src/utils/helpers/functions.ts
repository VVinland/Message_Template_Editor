import uuid from 'react-uuid';
import { StructureTemplate, Values } from './../../interfaces.ts';


const callbackSave = async (templateMessage: Array<StructureTemplate>) => {
    localStorage.setItem('template', JSON.stringify(templateMessage));
    return;
}

const getArrVarNames = () => {
    const arrVarNames = localStorage.arrVarNames
        ? JSON.parse(localStorage.arrVarNames)
        : ['firstname', 'lastname', 'company', 'position'];

    return arrVarNames;
}

const getTemplate = () => {

    // obj - this is how my structure looks like
    // if there is no subLevel then no nextTextFields
    // const obj = [
    //     {
    //         id: new Date().getMilliseconds() + 1,
    //         type: '',
    //         value: '',
    //         subLevel:
    //             [
    //                 {
    //                     id: new Date().getMilliseconds() + 15,
    //                     type: 'If',
    //                     value:'',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //                 {
    //                     id: new Date().getMilliseconds() + 27,
    //                     type: 'Then',
    //                     value:'',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //                 {
    //                     id: new Date().getMilliseconds() + 38,
    //                     type: 'Else',
    //                     value:'',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //             ],
    //         nextTextFields: [{
    //             type: '',
    //             value:'',
    //             id: new Date().getMilliseconds() + 101,
    //             subLevel:
    //                 [
    //                     {
    //                         id: new Date().getMilliseconds() + 203,
    //                         type: 'If',
    //                         value:'',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     },
    //                     {
    //                         id: new Date().getMilliseconds() + 307,
    //                         type: 'Then',
    //                         value:'',
    //                         subLevel: [
    //                             {
    //                                 id: new Date().getMilliseconds() + 432,
    //                                 type: 'If',
    //                                 value:'',
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             },
    //                             {
    //                                 id: new Date().getMilliseconds() + 505,
    //                                 type: 'Then',
    //                                 value:'',
    //                                 subLevel: [
    //                                     {
    //                                         id: new Date().getMilliseconds() + 601,
    //                                         type: 'If',
    //                                         value:'',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                     {
    //                                         id: new Date().getMilliseconds() + 733,
    //                                         type: 'Then',
    //                                         value:'',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                     {
    //                                         id: new Date().getMilliseconds() + 899,
    //                                         type: 'Else',
    //                                         value:'',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                 ],
    //                                 nextTextFields: [
    //                                     {
    //                                         id: new Date().getMilliseconds() + 323,
    //                                         type: '',
    //                                         value:'',
    //                                         subLevel: [{
    //                                             id: new Date().getMilliseconds() + 1001,
    //                                             type: 'If',
    //                                             value:'',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         {
    //                                             id: new Date().getMilliseconds() + 1111,
    //                                             type: 'Then',
    //                                             value:'',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         {
    //                                             id: new Date().getMilliseconds() + 2222,
    //                                             type: 'Else',
    //                                             value:'',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         ],
    //                                         nextTextFields: [{
    //                                             id: new Date().getMilliseconds() + 999,
    //                                             type: '',
    //                                             value:'',
    //                                             subLevel: [
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1001,
    //                                                     type: 'If',
    //                                                     value:'',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1111,
    //                                                     type: 'Then',
    //                                                     value:'',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 2222,
    //                                                     type: 'Else',
    //                                                     value:'',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                             ],
    //                                             nextTextFields: [
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1503,
    //                                                     type: '',
    //                                                     value:'',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                             ]
    //                                         }]
    //                                     },

    //                                 ]
    //                             },
    //                             {
    //                                 id: new Date().getMilliseconds() + 1703,
    //                                 type: 'Else',
    //                                 value:'',
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             },

    //                         ],
    //                         nextTextFields: [
    //                             {
    //                                 id: new Date().getMilliseconds() + 1893,
    //                                 type: '',
    //                                 value:'',
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         id: new Date().getMilliseconds() + 1932,
    //                         type: 'Else',
    //                         value:'',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     }
    //                 ],

    //             nextTextFields:
    //                 [
    //                     {
    //                         id: new Date().getMilliseconds() + 2118,
    //                         type: '',
    //                         value:'',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     }
    //                 ]
    //         },]
    //     },
    // ];

    let template = localStorage.template
        ? JSON.parse(localStorage.template)
        : null; 

    return template;
}

function generateSubLevelArray() {
    const subLevelArray = [ //  subLevel
        {

            id: uuid(),
            type: 'If',
            subLevel: null,
            nextTextFields: null,
            value: ''
        },
        {
            id: uuid(),
            type: 'Then',
            subLevel: null,
            nextTextFields: null,
            value: ''
        },
        {
            id: uuid(),
            type: 'Else',
            subLevel: null,
            nextTextFields: null,
            value: ''
        }
    ]
    return subLevelArray;
}

function generateNextTextFieldsArray() {
    const nextTextFieldsArray = [ //  nextTextFields
        {
            id: uuid(),
            type: '',
            subLevel: null,
            nextTextFields: null,
            value: ''
        }
    ]
    return nextTextFieldsArray
}

function insertObjectById(queue: Array<StructureTemplate> | null, index: string, cursor: number | null) {

    const subLevelArray = generateSubLevelArray();
    const nextTextFieldsArray = generateNextTextFieldsArray();

    for (let i = 0; i < queue!.length; i++) {

        if (queue![i].id === index) {

            if (queue![i].subLevel === null) {
                // structure template is in utils/helpers/function.ts in function getTemplate
                //First addition to a textarea with type ''
                const { leftString, rightString } = splitStringInTwo(queue![i].value, cursor);

                queue![i].value = leftString;
                queue![i].subLevel = subLevelArray;
                queue![i].nextTextFields = nextTextFieldsArray;
                queue![i].nextTextFields![0].value = rightString;
                return queue;
            } else if (queue![i].subLevel !== null) {
                //Subsequent addition to a textarea with type ''
                //If re-added, then all content will go into nextTextFields and new content will be added to subLevel
                const { leftString, rightString } = splitStringInTwo(queue![i].value, cursor);

                const obj = [{
                    id: uuid(),
                    type: '',
                    subLevel: queue![i].subLevel,
                    nextTextFields: queue![i].nextTextFields,
                    value: rightString
                }]

                queue![i].subLevel = subLevelArray
                queue![i].nextTextFields = obj;
                queue![i].value = leftString

                return queue;
            }
        } else if (queue![i].subLevel === null) {
            continue;
        } else {
            let result: Array<StructureTemplate> | null | undefined = insertObjectById(queue![i].subLevel, index, cursor);

            if (result) {
                queue![i].subLevel = result;
                return queue;
            }
            result = insertObjectById(queue![i].nextTextFields, index, cursor);

            if (result) {
                queue![i].nextTextFields = result;
                return queue;
            }
        }
    }

    return;
}

function deleteObjectById(queue: Array<StructureTemplate> | null, index: string | null, cursor: number | null) {
    for (let i = 0; i < queue!.length; i++) {
        if (queue![i].id === index) {
            // the reverse action of adding(insertObjectById)
            const id = queue![i].id;
            const type = queue![i].type;
            const str = queue![i].value + queue![i].nextTextFields![0].value;


            queue![i] = queue![i].nextTextFields![0];

            queue![i].id = id;
            queue![i].type = type;
            queue![i].value = str;

            return queue;
        } else if (queue![i].subLevel === null) {
            continue;
        } else {

            let result: Array<StructureTemplate> | null | undefined = deleteObjectById(queue![i].subLevel, index, cursor);

            if (result) {
                queue![i].subLevel = result;
                return queue;
            }

            result = deleteObjectById(queue![i].nextTextFields, index, cursor);
            if (result) {
                queue![i].nextTextFields = result;
                return queue;
            }
        }
    }
    return;
}

function updateValueStructureTemplate(queue: Array<StructureTemplate>, text: string, index: string) {

    for (let i = 0; i < queue.length; i++) {
        if (queue[i].id === index) {

            queue[i].value = text;

            return queue
        } else if (queue[i].subLevel === null) {
            continue;
        } else {
            let result = updateValueStructureTemplate(queue[i].subLevel!, text, index);
            if (result) return queue;

            result = updateValueStructureTemplate(queue[i].nextTextFields!, text, index);
            if (result) return queue;
        }
    }
    return;
}

function splitStringInTwo(str: string, index: number | null) {

    let leftString = '';
    let rightString = '';

    for (let i = 0; i < str.length; i++) {
        if (i < index!) {
            leftString += str[i];
        } else {
            rightString += str[i];
        }
    }

    return {
        leftString,
        rightString
    }

}

function insertVarName(queue: Array<StructureTemplate> | null, index: string | null, cursor: number | null, varName: string) {
    if (queue) {
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].id === index) {
                const { leftString, rightString } = splitStringInTwo(queue[i].value, cursor);
                queue[i].value = leftString + '{' + varName + '}' + rightString;
                return queue
            } else if (queue[i].subLevel === null) {
                continue;
            } else {
                let result = insertVarName(queue[i].subLevel, index, cursor, varName);
                if (result) {
                    queue[i].subLevel = result;
                    return queue;
                }

                result = insertVarName(queue[i].nextTextFields, index, cursor, varName);
                if (result) {
                    queue[i].nextTextFields = result;
                    return queue;
                }
            }
        }
    } else return;
}

function generateMessage(template: Array<StructureTemplate> | null, values: Values) {

    if (template) {

        let result = '';
        let flagIf = false;

        for (let i = 0; i < template.length; i++) {
            if (template[i].type === '' || template[i].type === 'Then' || template[i].type === 'Else') {

                if (template[i].type === 'Then' && flagIf === false) continue;

                if (template[i].type === 'Else' && flagIf === true) continue;

                if (template[i].value === '' && template[i].subLevel !== null) {
                    let str = generateMessage(template[i].subLevel, values);
                    if (str) result += str;

                    str = generateMessage(template[i].nextTextFields, values);
                    if (str) result += str;

                    continue;
                } else if (template[i].value === '' && template[i].subLevel === null) {
                    continue;
                } else if (template[i].value !== '' && template[i].subLevel === null) {
                    let str = replaceVariables(template[i].value, values);
                    result += str;
                    continue;
                } else if (template[i].value !== '' && template[i].subLevel !== null) {
                    let str = replaceVariables(template[i].value, values);
                    result += str;

                    str = generateMessage(template[i].subLevel, values);
                    if (str) result += str;

                    str = generateMessage(template[i].nextTextFields, values);
                    if (str) result += str;
                    continue;
                }

            } else if (template[i].type === 'If') {
                if (!template[i].value) {
                    flagIf = false;
                } else {
                    const str = replaceVariables(template[i].value, values)
                    if (str) {
                        flagIf = true;
                        continue;
                    } else {
                        flagIf = false;
                        continue;
                    }
                }
            } else return '';
        }
        return result;
    } else {
        return '';
    }
}

function replaceVariables(text: string, values: Values) {
    //All possible cases listed
    let result = '';
    let stack = [];
    let wordToCheck = ''

    for (let i = 0; i < text.length; i++) {
        if (stack.length === 0 && text[i] === '{') {
            stack.push(text[i]);
        } else if (stack.length > 0 && text[i] !== '}') {
            wordToCheck += text[i];
        } else if (stack.length > 0 && text[i] === '}') {

            if (wordToCheck !== '') {
                for (const varName in values) {

                    if (wordToCheck === varName) {
                        wordToCheck = values[varName];
                        stack.length = 0;
                        break;
                    }
                }

                if (stack.length === 0) {
                    result += wordToCheck;
                    wordToCheck = '';
                } else {
                    result += stack[0] + wordToCheck + text[i]
                    stack.length = 0;
                    wordToCheck = '';
                }
            } else {
                result += stack[0] + wordToCheck + text[i]
                stack.length = 0;
                wordToCheck = '';
            }


        } else result += text[i];
    }

    if (stack.length === 1) {
        result += stack[0] + wordToCheck;
    }

    return result;
}



export {
    callbackSave,
    getArrVarNames,
    getTemplate,
    insertObjectById,
    deleteObjectById,
    updateValueStructureTemplate,
    splitStringInTwo,
    insertVarName,
    generateMessage
}