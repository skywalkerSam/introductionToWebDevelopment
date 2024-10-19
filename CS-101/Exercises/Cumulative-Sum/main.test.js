import { expect, test } from "vitest";

let theArray = [3, 6, 9, 33, 66, 99, 36, 69, 96]
let anotherArray = [-3, -6, -9]

import { cumSum } from "./main";
test('cumSum()', () => {
    expect(cumSum(theArray)).toBe(417);
    expect(cumSum(anotherArray)).toBe(-18);
})

import { cumSummed } from "./main";
test('cumSummed()', () => {
    expect(cumSummed(theArray)).toBe(417);
    expect(cumSummed(anotherArray)).toBe(-18);
})

import { cummedSum } from "./main";
test('cummedSum()', () => {
    expect(cummedSum(theArray)).toBe(417);
    expect(cummedSum(anotherArray)).toBe(-18);
})

