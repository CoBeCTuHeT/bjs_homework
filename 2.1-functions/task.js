// Задание 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let response = {
        D: D,
        roots: []
    }
    if (D < 0) {
        return response;
    } else if (D == 0) {
        let x1 = -b / (2 * a);
        response.roots.push(x1)
        return response;
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        response.roots.push(x1, x2)
        return response;
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log('Вычисляем корни квадратного уравнения ' + `${a}x^2 + ${b}x + ${c}`)
    console.log('Значение дискриминанта: ' + result.D);
    if (result.roots.length === 0) {
        return console.log('Уравнение не имеет вещественных корней');
    } else if (result.roots.length === 1) {
        return console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.roots.length === 2) {
        return console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задание 2

function getAverageMark(data) {
    let result;
    if (data.length === 0) {
        return 0
    } else {
        let summ = 0;
        let quantityData = 0;
        for (let i = 0; i < data.length; i++) {
            summ += data[i]
            quantityData++;
        }
        result = summ / quantityData
        console.log(result)
        return result
    }
}

function getAverageScore(marks) {
    console.log(marks)
    if (Object.entries(marks).length === 0) {
        return { average: 0 }
    } else {
        let averageScore = new Object();
        averageScore["average"] = 0;
        let quantityScore = 0;
        let summAllScore = 0;
        for (let key in marks) {
            let sum = 0;
            for (let i = 0; i < marks[key].length; i++) {
                sum += marks[key][i];
                //Проверка суммы оценок
                // console.log(sum);

                // Проверка значения i и длины обьекта массива marks[key]
                // console.log(i, marks[key].length);
                if (i + 1 === marks[key].length) {
                    averageScore[key] = (sum / marks[key].length)
                    averageScore["average"] += sum / marks[key].length;
                }
            }
        }
        averageScore["average"] = averageScore["average"] / Object.entries(marks).length
        // Проверка перед выводом
        console.log(averageScore)
        return averageScore
    }
}
// Задача 3

function getPersonData(secretData) {
    console.log(secretData)
    let names = ['Родриго', 'Эмильо'];
    let nameSurname = new Object;

    if (secretData.aaa === 0) {
        nameSurname.firstName = names[0]
    } else if (secretData.aaa === 1) {
        nameSurname.firstName = names[1]
    }

    if (secretData.bbb === 0) {
        nameSurname.lastName = names[0]
    } else if (secretData.bbb === 1) {
        nameSurname.lastName = names[1]
    }
    console.log(nameSurname)
    return nameSurname
}

function getDecodedValue(secret) {
    if(secret === 0) {
        return "Родриго"
    }else if(secret === 1) {
        return "Эмильо"
    }
}

getPersonData({aaa: 1, bbb: 0})
getPersonData({aaa: 1, bbb: 1})
getPersonData({aaa: 0, bbb: 0})
getPersonData({aaa: 0, bbb: 1})