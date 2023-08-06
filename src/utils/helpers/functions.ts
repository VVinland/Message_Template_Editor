import { TextField, IQueue } from './../../interfaces.ts';

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

                // updateValueQueue(queue!, leftString, index)
                // const obj = [{
                //     id: new Date().getMilliseconds() + 92,
                //     type: '',
                //     subLevel: queue![i].subLevel,
                //     nextTextFields: queue![i].nextTextFields,
                //     value: rightString
                // }]

                // // queue![i].value = 'fdsfdsf';
                // console.log(queue![i].id, "cal id");

                // queue![i].subLevel = subLevelArray
                // queue![i].nextTextFields = obj;
                // queue![i].value = leftString

                const obj = {
                    id: queue![i].id,
                    type: queue![i].type,
                    value: leftString,
                    subLevel: subLevelArray,
                    nextTextFields: queue![i].nextTextFields
                }
                obj.nextTextFields![0].value = rightString;

                queue![i] = obj;


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
            console.log(queue[i].value, 'update do');

            console.log(text, 'text');

            queue[i].value = text;


            console.log(queue[i].value, 'update posle');

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

export {
    callbackSave,
    getArrVarNames,
    getTemplate,
    calculateObjectById,
    deleteObjectById,
    updateValueQueue,
    splitStringInTwo
}