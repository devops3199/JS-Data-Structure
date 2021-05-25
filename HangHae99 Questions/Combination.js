function combination(arr, num) {
    const result = [];

    if(num === 1) {
        return arr.map(v => [v]);
    }

    arr.forEach((v, idx, arr) => {
        const fixed = v;
        const rest = arr.slice(idx + 1);
        const combinationArr = combination(rest, num - 1);
        const combine = combinationArr.map(v => [fixed, ...v]);
        result.push(...combine);
    })

    return result;
}

console.log(combination([1,2,3,4], 2), 'Result');