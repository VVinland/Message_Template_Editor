import { generateMessage } from './../utils/helpers/functions.ts';
import uuid from 'react-uuid';

describe('check function generateMessage', () => {
    test('should return empty string if template is empty', () => {
        expect(generateMessage([], {})).toEqual('');
    })

    test('should return a string if there is a pattern but no values', () => {
        const values = {};
        const template = [
            {
                id: uuid(),
                type: '',
                value: 'Hello, Daniil! ',
                subLevel: [],
                nextTextFields: []
            }
        ];
        expect(generateMessage(template, values)).toEqual('Hello, Daniil! ')
    })

    test('should return a string if there is a template with variables regardless of the value of the variables', () => {
        let values = {
            firstname: 'Даниил',
            lastname: 'Гусев',
            company: 'Linked Helper',
            position: 'Junior developer TypeScript'
        };
        const template = [
            {
                id: uuid(),
                type: '',
                value: '{firstname} {lastname} {company} {position}',
                subLevel: [],
                nextTextFields: []
            }
        ];

        expect(generateMessage(template, values)).toEqual('Даниил Гусев Linked Helper Junior developer TypeScript');

        values = {
            firstname: '',
            lastname: '',
            company: '',
            position: ''
        };

        expect(generateMessage(template, values)).toEqual('   '); //три пробела
    })

    test(`When a variable with an empty value is in the "if" branch, then the "else" branch should work.
     Or if there is a variable with a value in the "if" branch, then the "then" branch will work`, () => {
        let values = {
            firstname: 'Даниил',
            lastname: 'Гусев',
            company: 'Linked Helper',
            position: 'Junior developer TypeScript',
            boolean: 'true',
        };
        const template = [
            {
                id: uuid(),
                type: '',
                value: 'Good aftermoon',
                subLevel: [
                    {
                        id: uuid(),
                        type: 'If',
                        value: '{boolean}',
                        subLevel: [],
                        nextTextFields: []
                    },
                    {
                        id: uuid(),
                        type: 'Then',
                        value: ' {firstname} {lastname} {company} {position}.',
                        subLevel: [],
                        nextTextFields: []
                    },
                    {
                        id: uuid(),
                        type: 'Else',
                        value: ', branch worked else!',
                        subLevel: [],
                        nextTextFields: []
                    }
                ],
                nextTextFields: [
                    {
                        id: uuid(),
                        type: '',
                        value: ' Best wishes!',
                        subLevel: [],
                        nextTextFields: []
                    }
                ]
            }
        ];

        expect(generateMessage(template, values)).toEqual('Good aftermoon Даниил Гусев Linked Helper Junior developer TypeScript. Best wishes!');
        values.boolean = '';
        expect(generateMessage(template, values)).toEqual('Good aftermoon, branch worked else! Best wishes!');
    })

    test('treat variables that are not in values as plain text', () => {
        let values = {
            firstname: 'Даниил',
            lastname: 'Гусев',
            company: 'Linked Helper',
            position: 'Junior developer TypeScript'
        };
        const template = [
            {
                id: uuid(),
                type: '',
                value: '{first{lastname}name} {middlename} {work} {job}',
                subLevel: [],
                nextTextFields: []
            }
        ];

        expect(generateMessage(template, values)).toEqual('{first{lastname}name} {middlename} {work} {job}');
    })
})