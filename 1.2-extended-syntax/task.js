'use strict'
function getResult(a, b, c) {
    let discriminant;
    let discriminantRoot;
    let x = [];
    discriminant = b ** 2 - 4 * a * c;
    discriminantRoot = Math.sqrt(discriminant)
    console.log(discriminant)
    if (discriminant < 0) {
        return x;
    } else if (discriminant === 0) {
        x[0] = -b / 2 * a
    } else if (discriminant > 0) {
        x[0] = (-b + discriminantRoot) / (2 * a)
        x[1] = (-b - discriminantRoot) / (2 * a)
    }
    return x;
}

function getAverageMark(marks) {
    marks = marks.splice(0, 5);
    if (marks.length === 0) {
        return 0;
    }
    for (let i = 0, summ = 0; i < marks.length; i++) {
        summ = summ + marks[i];
        if (i === (marks.length - 1)) {
            return summ / marks.length;
        }
    }
}

function askDrink(name, dateOfBirthday) {
    let age;
    let forAdultMessage = `Не желаете ли олд-фэшн, ${name}?`;
    let noAdult = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот.`;
    
    age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age < 18) {
        return noAdult;
    } else if (age >= 18) {
        return forAdultMessage;
    }
}
