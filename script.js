var play 
var startbtn = document.getElementById("start");
var intro_page = document. getElementById ("intro_page")
var container = document. getElementsByClassName ("container")
var questiontitle = document. getElementById ("question")



function startquiz(){
   intro_page.style.display ="none";
   container[0].style.display = "block" 
   questiontitle. textContent= quizQuestions[0].title
}
startbtn.addEventListener("click", startquiz);

var timeLeft = document.getElementById("timer");

// var secondsLeft = 60;
// var questionNumber = 0;
// var totalScore = 0;
// var questionCount = 1;

// function countdown() {
        
//         var timerInterval = setInterval(function () {

//           secondsLeft--;
//           timeLeft.textContent = "Time left: " + secondsLeft + " s";
    
//             if (secondsLeft <= 0){
//                 clearInterval(timerInterval);
//                 timeLeft.textContent = "Time is up!"; 
                
//                 finish.textContent = "Time is up!";
//                 gameOver();

//             } else  if(questionCount >= questionSource.length +1) {
//                 clearInterval(timerInterval);
//                 gameOver();
//                 } 
//     }, 1000);
// }