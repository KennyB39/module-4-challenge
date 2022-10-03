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

