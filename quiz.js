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

const shuffledOption = shuffleOption(answers);

//showing all answer option
shuffledOption.forEach((opt)=> {
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

//shuffling the options after every refresh
function shuffleOption(options){
  for(let i = options.length - 1; i >= 0; i--){
    const j = Math.floor(Math.random() * i+1);
    [options[i], options[j]] = [options[j], options[i]];
  }
return options;
}