import { expect, test } from 'vitest'
import { zip, even } from './index'

test('zip', () => {
    expect(zip([1, 2, 3], [4, 5, 6])).toStrictEqual([[1,4],[2,5],[3,6]])
    expect(zip([1, 2, 3], [4, 5])).toStrictEqual([[1,4],[2,5]])
    expect(zip([1, 2, 3], [4, 5, 6])).toStrictEqual([[1,4],[2,5],[3,6]])
    expect(zip([1, 2], [4, 5, 6])).toStrictEqual([[1,4],[2,5]])
})

test('even', () => {
    expect(even(124)).toBeTruthy()
})