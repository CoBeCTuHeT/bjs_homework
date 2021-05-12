//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome() {
    let justing = this.toString().toLowerCase().split("").join("").replace(/\s/g, "")
    let justingReverse = this.toString().toLowerCase().split("").reverse().join("").replace(/\s/g, "")

    // Проверка
    // console.log(justingReverse)
    // console.log(justing)

    let result = justingReverse === justing
    return result
}


function getAverageMark(marks) {
    let summ = 0;
    let count = 0;
    marks.forEach(element => {
        summ += element
        count++
    });
        // Проверка
    // console.log(summ, count);
    if(summ === 0) {
        return 0
    }
    let averageMark = summ / count;
        // Проверка
    // console.log(averageMark);
    let roundedAverage = Math.round(averageMark);
        // Проверка
    // console.log(roundedAverage);
    return roundedAverage
}

function checkBirthday(birthday) {
    let now = new Date().getTime();
    let birthdayf = new Date(birthday);
    let diff =  now - birthdayf;
    let age = diff / 31557600000;
    console.log(Math.floor(age))
    console.log(age > 18)
    return (age > 18)
}