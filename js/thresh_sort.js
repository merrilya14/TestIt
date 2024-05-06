function thresh_sort(array, threshold) {
    // Sort the array in descending order
    array.sort((a, b) => b - a);

    // Apply threshold to each element
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.min(array[i], threshold);
    }

    return array;
}

module.exports = thresh_sort;