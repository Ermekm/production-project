import { classNames } from './classNames'

describe('classNames', () => {
    test('with first argument', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional argument', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods argument', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected)
    })
})
