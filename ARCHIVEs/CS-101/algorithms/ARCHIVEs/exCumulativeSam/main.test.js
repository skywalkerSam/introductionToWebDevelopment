import { expect, test } from "vitest";

let theArray = [3, 6, 9, 33, 66, 99, 36, 69, 96]
let anotherArray = [-3, -6, -9]

import { cumSum } from "./cumulativeSum";
test('cumSum()', () => {
    expect(cumSum(theArray)).toBe(417);
    expect(cumSum(anotherArray)).toBe(-18);
})

import { cumSummed } from "./cumulativeSum";
test('cumSummed()', () => {
    expect(cumSummed(theArray)).toBe(417);
    expect(cumSummed(anotherArray)).toBe(-18);
})

import { cummedSum } from "./cumulativeSum";
test('cummedSum()', () => {
    expect(cummedSum(theArray)).toBe(417);
    expect(cummedSum(anotherArray)).toBe(-18);
})

