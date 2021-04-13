'use strict'

function getResult(a, b, c) {
    let discriminant;
    let discriminantRoot;
    let error = 'Корней не сущетсвует';
    let x = [];
    discriminant = b ** 2 - 4 * a * c;
    discriminantRoot = Math.sqrt(discriminant)
    console.log(discriminant)
    if (discriminant < 0) {
        return error
    } else if (discriminant === 0) {
        x[0] = -b / 2 * a
        return x;
    } else if (discriminant > 0) {
        x[0] = (-b + discriminantRoot) / (2 * a)
        x[1] = (-b - discriminantRoot) / (2 * a)
        return x;
    }
}

function getAverageMark(marks) {
    if(marks === 0) {
        return 0;
    }else {
        if(marks.lenght > 5) {
            marks = marks.slice(0, 5)
            sum = marks.reduce(function(a, b) {
                console.log(a + b)
                return a + b;
            });
        }
    }
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
}