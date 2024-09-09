let isTrend = (numbers) => {
    if (numbers.length === 0) {
        console.log([]);
        return;
    }

    let isAscending = numbers[0] < numbers[numbers.length - 1];
    console.log(isAscending ? "Тренд восходящий" : "Тренд нисходящий");
        
    let result = [];
    result.push(numbers[0]);
    
    for (let i = 1; i < numbers.length; i += 1) {
        if (isAscending && numbers[i] >= result[result.length - 1]) {
            result.push(numbers[i]);
        } else if (!isAscending && numbers[i] <= result[result.length - 1]) {
            result.push(numbers[i]);
        }
    }

    console.log(result);
};

isTrend([3, 2, 3, 4, 2, 3, 4, 2, 3, 4, 18, 9]);