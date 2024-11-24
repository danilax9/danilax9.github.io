
// Функция для удаления экран загрузки после завершения анимации
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('animate');
    });
    const el = document.querySelectorAll('.fade');
    el.forEach(element => {
        element.classList.add('animate');
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Добавляем класс, когда элемент виден
            observer.unobserve(entry.target); // Прекращаем наблюдение за элементом после его появления
        }
    });
}, {
    threshold: 0.5 // Элемент должен быть хотя бы на 50% видим
});

// Наблюдаем за элементом
const animateElement = document.querySelector('.animate-section');
observer.observe(animateElement);