// 1. Фільтрація та пошук у масиві об'єктів
const products = [
    { name: 'Продукт1', category: 'Категорія1', price: 100, inStock: 5 },
    { name: 'Продукт2', category: 'Категорія1', price: 150, inStock: 0 },
    { name: 'Продукт3', category: 'Категорія2', price: 200, inStock: 3 },
];

function getAvailableProducts() {
    const availableProducts = products.filter(product => product.inStock > 0);
    alert(JSON.stringify(availableProducts, null, 2));
}

function findProductByName() {
    const productName = prompt("Введіть назву товару:");
    const product = products.find(product => product.name === productName);
    alert(product ? JSON.stringify(product, null, 2) : "Товар не знайдено");
}

// 2. Групування та сортування масиву об'єктів
const students = [
    { name: 'Студент1', age: 20, grade: 90, group: 'Група1' },
    { name: 'Студент2', age: 21, grade: 85, group: 'Група2' },
    { name: 'Студент3', age: 22, grade: 95, group: 'Група1' },
];

function groupBy() {
    const grouped = students.reduce((acc, student) => {
        if (!acc[student.group]) {
            acc[student.group] = [];
        }
        acc[student.group].push(student);
        return acc;
    }, {});
    alert(JSON.stringify(grouped, null, 2));
}

function sortStudentsByGrade() {
    const sortedStudents = [...students].sort((a, b) => b.grade - a.grade);
    alert(JSON.stringify(sortedStudents, null, 2));
}

// 3. Статистичний аналіз даних з масиву об'єктів
const employees = [
    { name: 'Працівник1', position: 'Менеджер', salary: 5000, years: 5 },
    { name: 'Працівник2', position: 'Розробник', salary: 6000, years: 3 },
    { name: 'Працівник3', position: 'Аналітик', salary: 5500, years: 4 },
];

function getAverageSalary() {
    const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;
    alert(`Середня зарплата: ${averageSalary}`);
}

function findMostExperiencedEmployee() {
    const mostExperienced = employees.reduce((acc, employee) => 
        acc.years > employee.years ? acc : employee
    );
    alert(JSON.stringify(mostExperienced, null, 2));
}

// 4. Обробка та аналіз даних про книги
const books = [
    { title: 'Книга1', author: 'Автор1', year: 2020, rating: 4.5, isRead: false },
    { title: 'Книга2', author: 'Автор2', year: 2018, rating: 4.0, isRead: true },
    { title: 'Книга3', author: 'Автор1', year: 2022, rating: 5.0, isRead: false },
];

function getUnreadBooks() {
    const unreadBooks = books.filter(book => !book.isRead).map(book => book.title);
    alert(JSON.stringify(unreadBooks, null, 2));
}

function getBooksByAuthor() {
    const author = prompt("Введіть ім'я автора:");
    const filteredBooks = books.filter(book => book.author === author);
    const sortedBooks = filteredBooks.sort((a, b) => a.year - b.year);
    alert(JSON.stringify(sortedBooks, null, 2));
}

function getTopRatedBooks() {
    const topRatedBooks = books.filter(book => book.rating > 4)
                               .sort((a, b) => b.rating - a.rating);
    alert(JSON.stringify(topRatedBooks, null, 2));
}

// 5. Фільтрація та маніпуляція вкладених об'єктів у масиві
const orders = [
    { orderId: 1, customer: { name: 'Клієнт1', email: 'client1@example.com' }, items: ['Продукт1', 'Продукт3'], total: 300 },
    { orderId: 2, customer: { name: 'Клієнт2', email: 'client2@example.com' }, items: ['Продукт2'], total: 150 },
];

function getTotalSpentByCustomer() {
    const customerName = prompt("Введіть ім'я клієнта:");
    const totalSpent = orders.reduce((acc, order) => 
        order.customer.name === customerName ? acc + order.total : acc, 0);
    alert(`Загальна сума, витрачена ${customerName}: ${totalSpent}`);
}

// 6. Об'єднання та оптимізація даних у масиві об'єктів
const purchases = [
    { purchaseId: 1, productId: 1, quantity: 2 },
    { purchaseId: 2, productId: 2, quantity: 1 },
];

function getTotalSales() {
    const sales = products.map(product => {
        const productPurchases = purchases.find(purchase => purchase.productId === product.productId);
        const totalRevenue = productPurchases ? product.price * productPurchases.quantity : 0;
        return { name: product.name, totalRevenue };
    });
    alert(JSON.stringify(sales, null, 2));
}
