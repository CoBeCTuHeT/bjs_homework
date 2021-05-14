'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let creditBody;
    creditBody = amount - contribution;
    let todayDate = new Date();
    let months;
    let time;
    time = (date.getTime() - todayDate.getTime())
    console.log(time)
    months = (time / (1000 * 60 * 60 * 24 * 30) % 12)
    console.log(months)
    let part = percent / (1 / 12)
    let monthlyPayment = creditBody * (part + part / (((1 + part) * months) - 1))
    console.log(monthlyPayment)
    return monthlyPayment
}

function getGreeting(name) {
    let userName = name;
    console.log(userName)
    if (userName == "") {
        userName = "Аноним";
    }
    return `Привет, мир! Меня зовут ${userName}`
}