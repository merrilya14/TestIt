const thresh_sort = require ('./thresh_sort');

describe('thresh_sort function', () => (
    test("sorts and applies threshold directly with mixed values", () =>{
        const input = [10, 20, 5, 15];
        const threshold = 12;
        expect (thresh_sort(input, threshold)).toEqual([12, 12, 10, 5]);
    })
));

test('sorts correctly when all elements are below the threshold', () =>{
    const input = [3, 1, 4];
    const threshold = 10;
    expect(thresh_sort(input, threshold)).toEqual([4, 3, 1]);
});

test('caps all elements to the threshold when all are above it', () => {
    const input = [20, 30, 25];
    const threshold = 15;
    expect(thresh_sort(input, threshold)).toEqual([15, 15, 15]);
});

test('returns an empty array when input is empty', () => {
    const input = [];
    const threshold = 10;
    expect(thresh_sort(input, threshold)).toEqual([]);
});

// test('handles single element arrays correctly', () => {
//     const input = [5];
//     const threshold = 10;
//     expect(thresh_sort(input, threshold)).toEqual([5]);
//     const input2 = [15];
//     expect(thresh_sort(input, threshold)).toEqual([10]);
// });

test('sorts correctly with duplicate', () => {
    const input = [5, 5, 7, 7];
    const threshold = 6;
    expect(thresh_sort(input, threshold)).toEqual([6, 6, 5, 5]);
});