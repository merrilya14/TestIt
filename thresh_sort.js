

function thresh_sort(values, threshold) {
    // Apply threshold and sort in descending order
    return values.map(value => Math.min(value, threshold)).sort((a, b) => b - a);
}

module.exports = thresh_sort;