const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };


const {answers, question, correctAnswer} = questionObj;

const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const optionEl = document.getElementById("options");

questionEl.textContent = questionObj.question;

for(let i = 0; i<answers.length; i++){
  const optionBtn = document.createElement("button");
  optionBtn.id = i + 1;
  optionBtn.textContent = answers[i];
  optionEl.appendChild(optionBtn);
}