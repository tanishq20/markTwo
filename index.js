var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

var userInput = readlineSync.question(chalk.yellow('May I have your name? '));
console.log(chalk.green("\nHii "+ userInput +" Welcome to The Dream World!!"));
console.log(chalk.yellow("\nSoo Let's Start"));
console.log("\n----------------------------------------");
function rule(){
var s = readlineSync.question("\nPress s to start the game:");
}

// console.log(s);

var questions =[
  {
  question:"The Man of Steel is another name for which superhero? ",
  answer:"b",
  a:"Batman",
  b:"Superman",
  c:"Iron Man"
},
{
  question:"What is the real name of Batman? ",
  answer:"a",
  a:"Bruce Wayne",
  b:"Bruce Davis",
  c:"Bruce Devon"
},
{
  question:"Batman protects which city? ",
  answer:"a",
  a:"Gotham City",
  b:"Chicago",
  c:"Metropolis"
},
{
  question:"How did Spiderman have his superpowers? ",
  answer:"c",
  a:"He was born with the powers",
  b:"He was affected by a chemical explosion",
  c:"He was bitten by a spider"
},
{
  question:"Which superhero said that “Who knows what evil lurks in the hearts of men?” ",
  answer:"b",
  a:"The Thing",
  b:"The Shadow",
  c:"The Devastator"
},
{
  question:"The “Scarlett Speedster” is the nickname of which superhero? ",
  answer:"b",
  a:"Speedball",
  b:"The Flash",
  c:"Stardust"
}
]

function play(question, answer, a, b, c){
  var userAnswer = readlineSync.question("\n" + chalk.red(question) + "\n\na." + a + "\nb." + b + "\nc." + c + "\n\nYour answer: ");

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("\nYayy You are Right!!"));
    score++;
  }
  else{
    console.log(chalk.bgRedBright.white("\nYou are wrong!"));
    console.log(chalk.green("Correct answer is: "+answer));
  }
console.log("Your Score: ",score);
console.log("\n--------------------------")
}

for(var i=0; i<questions.length; i++){
  play(questions[i].question, questions[i].answer, questions[i].a, questions[i].b, questions[i].c)
}