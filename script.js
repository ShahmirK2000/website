setInterval(() => {
    const ageElement = document.getElementById('age');
    ageElement.textContent = dayjs().diff('2000-07-25', 'year', true).toFixed(10);
}, 50);