const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      answers: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };


const {correctAnswer, answers, question} = questionObj;
let score = 0;

const questionEl = document.getElementById("question");
const scoreEl = document.getElementById("score");
const optionEl = document.getElementById("options");

//showing the question
questionEl.textContent = questionObj.question;

//showing all answer option
answers.forEach((opt)=> {
  const btn = document.createElement("button");
  btn.textContent = opt;
  optionEl.appendChild(btn);

  //event handling on the btn
  btn.addEventListener('click', () => {
    if(opt === correctAnswer){
      score++;
    }else{
      score = score - 0.25;
    }

    scoreEl.textContent = `Score: ${score}`;

    //after answered turning the fields empty
    questionEl.textContent = "Quiz Completed";
    optionEl.textContent = ''; 
  });
});