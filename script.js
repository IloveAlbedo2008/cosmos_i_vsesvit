function checkQuiz() {
    // Знаходимо всі блоки з питаннями
    const quizItems = document.querySelectorAll('.quiz-item');
    let correctCount = 0;
    const totalQuestions = quizItems.length;

    quizItems.forEach((item) => {
        // Знаходимо обраний користувачем радіо-баттон у цьому питанні
        const selectedRadio = item.querySelector('input[type="radio"]:checked');
        const feedbackElement = item.querySelector('.feedback');

        if (selectedRadio) {
            // Перевіряємо значення value ("correct" або "wrong")
            if (selectedRadio.value === 'correct') {
                correctCount++;
                feedbackElement.textContent = '✅ Правильно!';
                feedbackElement.style.color = 'green';
            } else {
                feedbackElement.textContent = '❌ Неправильно.';
                feedbackElement.style.color = 'red';
            }
        } else {
            // Якщо користувач пропустив питання
            feedbackElement.textContent = '⚠️ Виберіть відповідь!';
            feedbackElement.style.color = 'orange';
        }
    });

    // Виводимо загальний результат тесту
    const resultElement = document.getElementById('quizResult');
    resultElement.textContent = `Ваш результат: ${correctCount} з ${totalQuestions} правильних відповідей.`;
    
    // Опціонально: змінюємо колір тексту загального результату залежно від успіху
    if (correctCount === totalQuestions) {
        resultElement.style.color = 'green';
    } else if (correctCount >= totalQuestions / 2) {
        resultElement.style.color = 'darkorange';
    } else {
        resultElement.style.color = 'red';
    }
}

