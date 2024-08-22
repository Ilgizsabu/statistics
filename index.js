let isTrend = (numbers) => {
    if (numbers === 0) {
        console.log([]);
        return;
    }

    let isAscending = numbers[0] < numbers[numbers.length - 1];
    
    if (isAscending) {
        console.log("Тренд восходящий");
    } else {
        console.log("Тренд нисходящий");
    }
        
    let result = [];
    result.push(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
        if (isAscending) {
            if (numbers[i] >= result[result.length - 1]) {
                result.push(numbers[i]);
            }
        } else {
            if (numbers[i] <= result[result.length - 1]) {
                result.push(numbers[i]);
            }
        }
    }
    console.log(result);
};

isTrend([1, 2, 3, 4, 2, 3, 4, 2, 3, 6, 8, 9]);