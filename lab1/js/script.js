/* 3.3 */
const button_3_3 = document.getElementById("3-3-button");
button_3_3.onclick = function () {
    alert("Нажміть ОК.");

    button_3_3.after("<h1>Hello, world!</h1>");
}

/* 3.4 - 3.5 */
function displayInput(userInput) {
    if (userInput !== null && userInput !== "") {
        alert("Ваш ввід: " + userInput);
    }
    else {
        alert("Ви не ввели нічого.");
    }
}

const button_3_4 = document.getElementById("3-4-button")
button_3_4.onclick = function () {
    const userInput = prompt("Введіть:");
    displayInput(userInput);
}

/* 3.5 */
const button_3_5 = document.getElementById("3-5-button");
button_3_5.onmouseover = function () {
    const userInput = prompt("Введіть щось:");
    displayInput(userInput);
}

/* 3.6 */
const button_3_6 = document.getElementById("3-6-button");
button_3_6.onclick = function () {
    const firstNumber = Number(prompt("Введіть перше число:"));
    const secondNumber = Number(prompt("Введіть друге число:"));

    const sum = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${sum}`);
}

/* 3.7 */
const button_3_7 = document.getElementById("3-7-button");
button_3_7.onclick = function () {
    const firstNumber = Number(prompt("Введіть перше число:"));
    const secondNumber = Number(prompt("Введіть друге число:"));

    alert(`Більше число: ${Math.max(firstNumber, secondNumber)}`);
}

/* 3.8 */
const button_3_8 = document.getElementById("3-8-button");
button_3_8.onclick = function () {
    const monthNumber = Number(prompt("Введіть номер місяця:"));

    let season = "";
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            season = "Зима";
            break;

        case 3:
        case 4:
        case 5:
            season = "Весна";
            break;

        case 6:
        case 7:
        case 8:
            season = "Літо";
            break;

        case 9:
        case 10:
        case 11:
            season = "Осінь";
            break;

        default:
            season = "Невірний номер місяця."
            break;
    }

    alert(`Пора року місяця з номером ${monthNumber} - ${season}.`);
}

/* 3.9 */
const button_3_9 = document.getElementById("3-9-button");
button_3_9.onclick = function () {
    const userConfirmed = confirm("Ви впевнені, що хочете продовжити?");

    if (userConfirmed) {
        alert("Продовжуємо!");
    } else {
        alert("Скасування.");
    }
}

/* 3.10 */
const button_3_10 = document.getElementById("3-10-button");
button_3_10.onclick = function () {
    const numberOfStudents = parseInt(prompt("Введіть кількість учнів:"));

    if (isNaN(numberOfStudents) || numberOfStudents <= 0) {
        alert("Введіть правильну кількість!");
    }
    else {
        let students = [];

        for (let i = 0; i < numberOfStudents; i++) {
            const StudentName = prompt(`Введіть прізвище та ім'я учня ${i + 1}`);
            students.push(StudentName);
        }

        const resultDiv = document.getElementById("result_container");
        resultDiv.innerHTML = '<h2> Список учнів: </h2><ul>' +
            students.map(student => `<li> ${student}</li>`).join('') +
            '</ul>';
    }
}

/* 3.11 */
const button_3_11 = document.getElementById("3-11-button");
button_3_11.onclick = function () {
    let students = [];
    let input;

    while (true) {
        input = prompt("Введіть ім'я та прізвище (для завершення натисніть ВІДМІНА):");

        if (input == null) {
            break;
        }

        students.push(input);
    }

    const resultDiv = document.getElementById("result_container");
    if (students.length > 0) {
        resultDiv.innerHTML = '<h2>Список учнів:</h2><ul>' +
            students.map(name => `<li>${name}</li>`).join('') +
            '</ul>';
    } else {
        resultDiv.innerHTML = '<h2>Імен не введено.</h2>';
    }
}

/* 3.12 */
const button_3_12 = document.getElementById("3-12-button");
button_3_12.onclick = function () {
    const resultDiv = document.getElementById("result_container");
    let tableHTML = '<table border="1" cellspacing="0" cellpadding="5">';

    for (let i = 1; i <= 10; i++) {
        tableHTML += '<tr>';
        for (let j = 1; j <= 10; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    resultDiv.innerHTML = tableHTML;
}