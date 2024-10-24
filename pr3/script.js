// Завдання 1: Перевірка наявності слова
function checkWord() {
    const text = document.getElementById("checkWordInput").value;
    const word = "JavaScript";
    const regex = new RegExp(word, "i");
    const result = regex.test(text);
    document.getElementById("checkWordResult").innerText = result ? "Слово знайдено." : "Слово не знайдено.";
}

// Завдання 2: Перевірка формату телефонного номера
function checkPhone() {
    const phone = document.getElementById("phoneInput").value;
    const regex = /^\+380\d{2}-\d{3}-\d{4}$/;
    const result = regex.test(phone);
    document.getElementById("phoneResult").innerText = result ? "Коректний номер." : "Некоректний номер.";
}

// Завдання 3: Підрахунок кількості слів у тексті
function countWords() {
    const text = document.getElementById("wordCountInput").value;
    const words = text.trim().split(/\s+/);
    const count = words.filter(word => word.length > 0).length;
    document.getElementById("wordCountResult").innerText = `Кількість слів: ${count}`;
}

// Завдання 4: Валідація пароля
function validatePassword() {
    const password = document.getElementById("passwordInput").value;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    const result = regex.test(password);
    document.getElementById("passwordResult").innerText = result ? "Коректний пароль." : "Некоректний пароль.";
}

// Завдання 5: Заміна форматів дати
function convertDateFormat() {
    const text = document.getElementById("dateInput").value;
    const result = text.replace(/(\d{2})\/(\d{2})\/(\d{4})/g, '$3-$2-$1');
    document.getElementById("dateResult").innerText = result;
}

// Завдання 6: Перевірка та витяг електронних адрес
function extractEmails() {
    const text = document.getElementById("emailInput").value;
    const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}/g;
    const emails = text.match(regex);
    document.getElementById("emailResult").innerText = emails ? JSON.stringify(emails) : "Електронні адреси не знайдено.";
}
