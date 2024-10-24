// 1. Додати нуль до годин, хвилин, секунд
function pad(num) {
    return num < 10 ? '0' + num : num;
}

// 2.1 Створення годинника з попередженням
// 2.1 Створення годинника з попередженням
function startClock() {
    let secondsPassed = 0; // Лічильник секунд

    setInterval(() => {
        const now = new Date();
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());
        document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

        secondsPassed++; // Збільшення лічильника секунд

        // Перевірка, чи пройшла ще одна хвилина
        if (secondsPassed % 60 === 0) {
            alert("Пройшла ще одна хвилина!");
        }
    }, 1000);
}


// 2.2 Закриття сторінки через 30 секунд
function startClosePageClock() {
    setTimeout(() => {
        alert("Сторінка буде закрита!");
        window.close(); // Ця функція може не працювати в усіх браузерах
    }, 30000);
}

// 2.3 Оновлення секундоміра
function startSecondClock() {
    let seconds = 0;
    setInterval(() => {
        seconds++;
        document.getElementById("secondClock").innerText = `Секунди: ${seconds}`;
        
        if (seconds % 60 === 0) {
            alert(`Пройшла хвилина!`);
        }

        if (seconds >= 3600) {
            alert(`Пройшла година!`);
        }
    }, 1000);
}

// 2.4 Оновлення часу з попередженням
function startUpdateTime() {
    // Оновлення часу кожні 30 секунд
    setInterval(() => {
        const now = new Date();
        const hours = pad(now.getHours());
        const minutes = pad(now.getMinutes());
        const seconds = pad(now.getSeconds());
        document.getElementById("updateTimeDisplay").innerText = `Поточний час: ${hours}:${minutes}:${seconds}`;
        alert("Час оновлено!"); // Попередження про оновлення
    }, 30000);

    // Оновлення часу відразу після запуску
    updateTime();
}


// 2.5 Оновлення часу по кнопці
function updateTime() {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    document.getElementById("manualTimeDisplay").innerText = `Поточний час: ${hours}:${minutes}:${seconds}`;
}


// 3. Ефект друкарської машинки
function startTypingEffect() {
    const phrase = prompt("Введіть фразу:");
    const display = document.getElementById("typingDisplay");
    display.innerText = "";
    
    let index = 0;
    
    const interval = setInterval(() => {
        if (index < phrase.length) {
            display.innerText += phrase.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 150); // Тайм-інтервал між літерами
}

// 4. Ставка на результат
function placeBet() {
    const amount = Number(document.getElementById("betAmount").value);
    
    if (isNaN(amount) || amount <= 0) {
        alert("Будь ласка, введіть дійсну ставку.");
        return;
    }
    
    const randomNumber = Math.floor(Math.random() * 11) - 5; // Генерація числа від -5 до 5
    
    setTimeout(() => {
        if (randomNumber <= 0) {
            document.getElementById("betResult").innerText = "Ви не вгадали!";
        } else {
            const winnings = amount * randomNumber;
            document.getElementById("betResult").innerText = `Ви виграли ${winnings} гривень!`;
        }
    }, 1000);
}
