import { TextField, IQueue, Values } from './../../interfaces.ts';

const callbackSave = async (templateMessage: []) => {
    localStorage.setItem('template', JSON.stringify(templateMessage));
    return;
} // поддделать ассинхронность, но с начало определиться с шаблоном сообщения

const getArrVarNames = () => {
    const arrVarNames = localStorage.arrVarNames
        ? JSON.parse(localStorage.arrVarNames)
        : ['firstname', 'lastname', 'company', 'position'];
    return arrVarNames;
}

const getTemplate = () => {
    // const obj = [
    //     {
    //         id: new Date().getMilliseconds() + 1,
    //         type: '',
    //         subLevel:
    //             [
    //                 {
    //                     id: new Date().getMilliseconds() + 15,
    //                     type: 'If',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //                 {
    //                     id: new Date().getMilliseconds() + 27,
    //                     type: 'Then',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //                 {
    //                     id: new Date().getMilliseconds() + 38,
    //                     type: 'Else',
    //                     subLevel: null,
    //                     nextTextFields: null
    //                 },
    //             ],
    //         nextTextFields: [{
    //             type: '',
    //             id: new Date().getMilliseconds() + 101,
    //             subLevel:
    //                 [
    //                     {
    //                         id: new Date().getMilliseconds() + 203,
    //                         type: 'If',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     },
    //                     {
    //                         id: new Date().getMilliseconds() + 307,
    //                         type: 'Then',
    //                         subLevel: [
    //                             {
    //                                 id: new Date().getMilliseconds() + 432,
    //                                 type: 'If',
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             },
    //                             {
    //                                 id: new Date().getMilliseconds() + 505,
    //                                 type: 'Then',
    //                                 subLevel: [
    //                                     {
    //                                         id: new Date().getMilliseconds() + 601,
    //                                         type: 'If',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                     {
    //                                         id: new Date().getMilliseconds() + 733,
    //                                         type: 'Then',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                     {
    //                                         id: new Date().getMilliseconds() + 899,
    //                                         type: 'Else',
    //                                         subLevel: null,
    //                                         nextTextFields: null
    //                                     },
    //                                 ],
    //                                 nextTextFields: [
    //                                     {
    //                                         id: new Date().getMilliseconds() + 323,
    //                                         type: '',
    //                                         subLevel: [{
    //                                             id: new Date().getMilliseconds() + 1001,
    //                                             type: 'If',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         {
    //                                             id: new Date().getMilliseconds() + 1111,
    //                                             type: 'Then',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         {
    //                                             id: new Date().getMilliseconds() + 2222,
    //                                             type: 'Else',
    //                                             subLevel: null,
    //                                             nextTextFields: null
    //                                         },
    //                                         ],
    //                                         nextTextFields: [{
    //                                             id: new Date().getMilliseconds() + 999,
    //                                             type: '',
    //                                             subLevel: [
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1001,
    //                                                     type: 'If',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1111,
    //                                                     type: 'Then',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 2222,
    //                                                     type: 'Else',
    //                                                     subLevel: null,
    //                                                     nextTextFields: null
    //                                                 },
    //                                             ],
    //                                             nextTextFields: [
    //                                                 {
    //                                                     id: new Date().getMilliseconds() + 1503,
    //                                                     type: '',
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
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             },

    //                         ],
    //                         nextTextFields: [
    //                             {
    //                                 id: new Date().getMilliseconds() + 1893,
    //                                 type: '',
    //                                 subLevel: null,
    //                                 nextTextFields: null
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         id: new Date().getMilliseconds() + 1932,
    //                         type: 'Else',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     }
    //                 ],

    //             nextTextFields:
    //                 [
    //                     {
    //                         id: new Date().getMilliseconds() + 2118,
    //                         type: '',
    //                         subLevel: null,
    //                         nextTextFields: null
    //                     }
    //                 ]
    //         },]
    //     },
    // ];

    // const obj = [
    //     {
    //         type: '',
    //         subLevel: [
    //             {
    //                 type: 'If',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //             {
    //                 type: 'Then',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //             {
    //                 type: 'Else',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //         ],
    //         nextTextFields: [
    //             {
    //                 type: '',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             }
    //         ]
    //     },
    //     {
    //         type: '',
    //         subLevel: [
    //             {
    //                 type: 'If',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //             {
    //                 type: 'Then',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //             {
    //                 type: 'Else',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             },
    //         ],
    //         nextTextFields: [
    //             {
    //                 type: '',
    //                 subLevel: null,
    //                 nextTextFields: null
    //             }
    //         ]
    //     }
    // ]

    let temporary = localStorage.getItem('template')
        ? localStorage.getItem('template')
        : null;

    let template;
    if (temporary) {
        template = JSON.parse(temporary);
    }
    return template;
}

function generateSubLevelArray() {
    const subLevelArray = [ // в subLevel
        {

            id: new Date().getMilliseconds() + 101,
            type: 'If',
            subLevel: null,
            nextTextFields: null,
            value: ''
        },
        {
            id: new Date().getMilliseconds() + 303,
            type: 'Then',
            subLevel: null,
            nextTextFields: null,
            value: ''
        },
        {
            id: new Date().getMilliseconds() + 505,
            type: 'Else',
            subLevel: null,
            nextTextFields: null,
            value: ''
        }
    ]
    return subLevelArray;
}

function generateNextTextFieldsArray() {
    const nextTextFieldsArray = [ // в nextTextFields
        {
            id: new Date().getMilliseconds() + 909,
            type: '',
            subLevel: null,
            nextTextFields: null,
            value: ''
        }
    ]
    return nextTextFieldsArray
}

function calculateObjectById(queue: Array<IQueue> | null, index: number, cursor: number | null) {
    // console.log(index);

    const subLevelArray = generateSubLevelArray();
    const nextTextFieldsArray = generateNextTextFieldsArray();

    for (let i = 0; i < queue!.length; i++) {

        if (queue![i].id === index) {

            if (queue![i].subLevel === null) {

                const { leftString, rightString } = splitStringInTwo(queue![i].value, cursor);

                queue![i].value = leftString;
                queue![i].subLevel = subLevelArray;
                queue![i].nextTextFields = nextTextFieldsArray;
                queue![i].nextTextFields![0].value = rightString;
                return queue;
            } else if (queue![i].subLevel !== null) {
                const { leftString, rightString } = splitStringInTwo(queue![i].value, cursor);
                // queue![i].value = '';
                // console.log(queue![i].value);

                // queue![i].nextTextFields![0].value = rightString;
                // console.log(queue![i]);

                // updateValueQueue(queue!, leftString, index)
                const obj = [{
                    id: new Date().getMilliseconds() + 92,
                    type: '',
                    subLevel: queue![i].subLevel,
                    nextTextFields: queue![i].nextTextFields,
                    value: rightString
                }]

                // console.log(queue![i].id, "cal id");

                queue![i].subLevel = subLevelArray
                queue![i].nextTextFields = obj;
                queue![i].value = leftString

                // const obj = {
                //     id: queue![i].id,
                //     type: queue![i].type,
                //     value: leftString,
                //     subLevel: subLevelArray,
                //     nextTextFields: queue![i].nextTextFields
                // }
                // obj.nextTextFields![0].value = rightString;

                // queue![i] = obj;


                return queue;
            }
        } else if (queue![i].subLevel === null) {
            continue;
        } else {
            let result: Array<IQueue> | null | undefined = calculateObjectById(queue![i].subLevel, index, cursor);

            if (result) {
                queue![i].subLevel = result;
                return queue;
            }
            result = calculateObjectById(queue![i].nextTextFields, index, cursor);

            if (result) {
                queue![i].nextTextFields = result;
                return queue;
            }
        }
    }

    return;
}

function deleteObjectById(queue: Array<IQueue> | null, index: number | null, cursor: number | null) {
    for (let i = 0; i < queue!.length; i++) {
        if (queue![i].id === index) {

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

            let result: any = deleteObjectById(queue![i].subLevel, index, cursor);
            console.log(result);
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

function updateValueQueue(queue: Array<IQueue>, text: string, index: number) {
    for (let i = 0; i < queue.length; i++) {
        if (queue[i].id === index) {
            // console.log(queue[i].value, 'update do');

            // console.log(text, 'text');

            queue[i].value = text;


            // console.log(queue[i].value, 'update posle');

            return queue
        } else if (queue[i].subLevel === null) {
            continue;
        } else {
            let result = updateValueQueue(queue[i].subLevel!, text, index);
            if (result) return queue;

            result = updateValueQueue(queue[i].nextTextFields!, text, index);
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

function insertVarName(queue: Array<IQueue> | null, index: number | null, cursor: number | null, varName: string) {
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

function generateMessage(template: Array<IQueue> | null, values: Values) {

    if (template) {

        let result = '';
        let flagIf = false;

        for (let i = 0; i < template.length; i++) {
            if (template[i].type === '') {

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
            } else if (template[i].type === 'Then') {
                if (flagIf) {
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
                } else continue;
            } else if (template[i].type === 'Else') {
                if (!flagIf) {
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
                } else continue;
            } else return '';
        }
        return result;
    } else {
        return '';
    }
}

function replaceVariables(text: string, values: Values) {

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
                        wordToCheck = values[varName]; // попробовать break и return
                        stack.length = 0;
                    }
                }

                if (stack.length === 0) {
                    result += wordToCheck;
                    wordToCheck='';
                } else {
                    result += stack[0] + wordToCheck + text[i]
                    stack.length = 0;
                    wordToCheck='';
                }
            } else {
                result += stack[0] + wordToCheck + text[i]
                stack.length = 0;
                wordToCheck='';
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
    calculateObjectById,
    deleteObjectById,
    updateValueQueue,
    splitStringInTwo,
    insertVarName,
    generateMessage
}