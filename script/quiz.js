function checkAnswer(button, selectedAnswer) {
    const section = button.closest('.question-section');
    const correctAnswer = section.querySelector('.correct-answer').textContent.split(': ')[1].trim();
    
    // Disable all buttons in this question
    const options = section.querySelectorAll('.option');
    options.forEach(opt => opt.disabled = true);
    
    // Mark section as answered
    section.dataset.answered = 'true';
    
    if (selectedAnswer === correctAnswer) {
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        // Highlight correct answer
        options.forEach(opt => {
            if (opt.textContent.startsWith(correctAnswer)) {
                opt.classList.add('correct');
            }
        });
    }
}

function showAnswer(button) {
    const section = button.closest('.question-section');
    if (!section.dataset.answered) {
        alert('Please select an answer first!');
        return;
    }
    
    const correctAnswer = section.querySelector('.correct-answer');
    correctAnswer.classList.add('show');
}