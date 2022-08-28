const quizData = [{
    question: " Cu stand for _______________ .",
    a: "Central unit",
    b: "Control unit",
    c: "Cpu unit",
    d: "Custom unit",
    correct: "b",
},
{
    question: "Alu Stand for_______________.",
    a: "Arithmetic logical unit",
    b: "Arithmetic logic unit",
    c: "Arithmetic long unit",
    d: "Ar Logical unit",
        correct: "b",
},
{
    question: "Ram stand for ____________.",
    a: "Read acess memory",
    b: "Random able memory",
    c: "Random acess memory",
    d: "Read only memory",
    correct: "c",
},
{
    question: "Rom stand for _________ .",
    a: "Read only memory",
    b: "Random only memory",
    c: "Require only memory",
    d: "Read one memory",
    correct: "a",
},
{
    question: "Html stand for________ .",
    a: "Hyper text make language",
    b: "Hyper text modele language",
    c: "Hyper text mark language",
    d: "Hyper text markup language",
    correct: "d",
},{
    question: " Css stand for_________ .",
    a: "Cascading Style sheet",
    b: "Cascading sheet style",
    c: "Connect style sheet",
    d: "Cooperate style sheet",
    correct: "a",
},{
    question: "Js stand for______________ ",
    a: "jupiter script",
    b: "java sheet",
    c: "Java script",
    d: " None of them",
    correct: "c",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);