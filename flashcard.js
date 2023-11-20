const flashcards = [];

let currentFlashcardIndex = 0;


function showAnswer() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');

if (question && answer) {
    
   if (question.style.display === 'none') {
    question.style.display = 'block';
    answer.style.display = 'none';

} else {
    question.style.display = 'none';
    answer.style.display = 'block';
}}}

function createFlashCard() {
    const userQuestion = document.getElementById('userQuestion').value;
    const userAnswer = document.getElementById('userAnswer').value;
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');
    

    if (userQuestion && userAnswer && question && answer) {
        const newFlashcard = { 
            question: userQuestion,
            answer: userAnswer
        };

        flashcards.push(newFlashcard);

        displayFlashcard();
    

    //reset input

        document.getElementById('userQuestion').value = '';
        document.getElementById('userAnswer').value = '';

    // show q hide a

        question.style.display = 'block';
        answer.style.display = 'none';

} else {
    alert('Please enter a question and an answer');
}
}

function displayFlashcard() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');

    if (flashcards.length > 0 && currentFlashcardIndex < flashcards.length) {
        question.innerText = `Question: ${flashcards[currentFlashcardIndex].question}`;
        answer.innerText = `Answer: ${flashcards[currentFlashcardIndex].answer}`;
    }



}