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

function getAverageScore(data) {
    let result = getAverageMark(data);

    return result
}

function getAverageMark(marks) {
    let averageScore = new Object();
    let quantityScore = 0;
    let summAllScore = 0;
    for (let key in marks) {
        let sum = 0;
        for (let i = 0; i < marks[key].length; i++) {
            sum += marks[key][i];
            quantityScore++;
            summAllScore += marks[key][i];
            //Проверка суммы оценок
            // console.log(sum);

            // Проверка значения i и длины обьекта массива marks[key]
            // console.log(i, marks[key].length);
            if (sum === 0) {
                return averageScore['average'] = 0
            }


            if (i + 1 === marks[key].length) {
                averageScore[key] = (sum / marks[key].length)
                averageScore['average'] = summAllScore / quantityScore;
                console.log(averageScore)
            }
        }
    }
    // Проверка перед выводом
    console.log(averageScore, quantityScore, summAllScore);
    return averageScore
}


// Задача 3

function getPersonData(secretData) {
    let result = getDecodedValue(secretData)
    console.log(result)
    return result
}

function getDecodedValue(secret) {
    let names = ['Радриго', 'Эмилио'];
    let nameSurname  = new Object;


    if(secret.aaa === 0) {
        nameSurname.firstName = names[0]
    }else if(secret.aaa === 1) {
        nameSurname.firstName = names[1]
    }

    if(secret.bbb === 0) {
        nameSurname.lastName = names[0]
    }else  if(secret.bbb === 1) {
        nameSurname.lastName = names[1]
    }
    
    return nameSurname
}
