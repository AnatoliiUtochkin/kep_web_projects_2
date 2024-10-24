// Масив для зберігання зустрічей
let meetings = [
    {
        topic: "Проєкт з фрілансу",
        date: "2024-10-24",
        time: "14:00",
        place: "Онлайн",
        isDone: false
    },
    {
        topic: "Робоча зустріч",
        date: "2024-10-25",
        time: "11:00",
        place: "Офіс",
        isDone: true
    },
    {
        topic: "Зустріч з клієнтом",
        date: "2024-10-26",
        time: "16:00",
        place: "Кафе",
        isDone: false
    }
];

// Функція для відображення зустрічей
function displayMeetings() {
    const meetingList = document.getElementById("meetingList");
    meetingList.innerHTML = '';

    meetings.forEach((meeting, index) => {
        const li = document.createElement("li");
        li.className = meeting.isDone ? 'done' : '';

        li.innerHTML = `
            <strong>Тема:</strong> ${meeting.topic} <br>
            <strong>Дата:</strong> ${meeting.date} <br>
            <strong>Час:</strong> ${meeting.time} <br>
            <strong>Місце:</strong> ${meeting.place} <br>
            <strong>Проведено:</strong> ${meeting.isDone ? 'Так' : 'Ні'}
        `;
        meetingList.appendChild(li);
    });
}

// Додавання нової зустрічі
const form = document.getElementById("meetingForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newMeeting = {
        topic: document.getElementById("topic").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        place: document.getElementById("place").value,
        isDone: document.getElementById("isDone").checked
    };

    meetings.push(newMeeting);
    displayMeetings();
    form.reset();
});

// Виклик функції для початкового відображення зустрічей
displayMeetings();

// Функція для сортування за датою зустрічі
function sortMeetings() {
    meetings.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("Відсортовані зустрічі:", meetings);
}

// Функція для фільтрації непройдених зустрічей
function filterUndoneMeetings() {
    const unreadMeetings = meetings.filter(meeting => !meeting.isDone);
    console.log("Непройдені зустрічі:", unreadMeetings);
}

// Функція для пошуку зустрічі за темою
function findMeetingByTopic(topic) {
    const foundMeeting = meetings.find(meeting => meeting.topic === topic);
    console.log("Знайдена зустріч:", foundMeeting);
}
