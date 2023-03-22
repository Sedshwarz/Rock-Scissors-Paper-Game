//<i class="fas fa-hand-scissors"></i>
//<i class="fas fa-hand-paper computer"></i>

var score = document.getElementById("score"),
    text = document.getElementById("text"),
    textComputer = document.getElementById("textComputer"),
    state = document.getElementById("state"),
    scoreYou = 0,
    scoreComputer = 0,
    signArray = ["Rock","Paper","Scissors"],
    selectBox = document.querySelector(".selectBox"),
    boxes = document.querySelectorAll(".box"),
    mySign = document.getElementById("mySign"),
    compSign = document.getElementById("compSign");



 function play(x){
   var box1 = boxes[0], box2 = boxes[1];
   selectBox.classList.remove("chooseOne");
   mySign.className = "fas fa-hand-rock me shake1";
   compSign.className = "fas fa-hand-rock computer shake2";
   state.className = "";
   state.style.transform = "scale(0)";
   text.innerText = "";
   textComputer.innerText = "";
   box1.style.boxShadow = "";
   box2.style.boxShadow = "";


   var random = Math.round(Math.random()*2);
   var signComputer = signArray[random];

   if (x == "Rock" && signComputer == "Rock"){setTimeout(function(){control('fas fa-hand-rock me','fas fa-hand-rock computer','Draw');},2000);}
   else if (x == "Rock" && signComputer == "Paper"){setTimeout(function(){control('fas fa-hand-rock me','fas fa-hand-paper computer','Loss');},2000);}
   else if (x == "Rock" && signComputer == "Scissors"){setTimeout(function(){control('fas fa-hand-rock me','fas fa-hand-scissors','Won');},2000);}
   else if (x == "Paper" && signComputer == "Rock"){setTimeout(function(){control('fas fa-hand-paper me','fas fa-hand-rock computer','Won');},2000);}
   else if (x == "Paper" && signComputer == "Paper"){setTimeout(function(){control('fas fa-hand-paper me','fas fa-hand-paper computer','Draw');},2000);}
   else if (x == "Paper" && signComputer == "Scissors"){setTimeout(function(){control('fas fa-hand-paper me','fas fa-hand-scissors','Loss');},2000);}
   else if (x == "Scissors" && signComputer == "Rock"){setTimeout(function(){control('fas fa-hand-scissors meScsr','fas fa-hand-rock computer','Loss');},2000);}
   else if (x == "Scissors" && signComputer == "Paper"){setTimeout(function(){control('fas fa-hand-scissors meScsr','fas fa-hand-paper computer','Won');},2000);}
   else if (x == "Scissors" && signComputer == "Scissors"){setTimeout(function(){control('fas fa-hand-scissors meScsr','fas fa-hand-scissors','Draw');},2000);}


   function control(cName1,cName2,situation){
     switch (situation) {
       case "Won":
        box1.style.boxShadow = "0 0 12px #32e2b2";
        box2.style.boxShadow = "0 0 12px #ff847c";
        state.innerText = "WON";
        state.className = "won";
        scoreYou++;
       break;

       case "Loss":
        box1.style.boxShadow = "0 0 12px #ff847c";
        box2.style.boxShadow = "0 0 12px #32e2b2";
        state.innerText = "LOSS";
        state.className = "loss";
        scoreComputer++;
       break;

       case "Draw":
        box1.style.boxShadow = "0 0 12px #e6be58";
        box2.style.boxShadow = "0 0 12px #e6be58";
        state.innerText = "DRAW";
        state.className = "draw";
       break;
       default: return false;
     }

     mySign.className = cName1;
     compSign.className = cName2;
     text.innerText = x;
     textComputer.innerText = signComputer;
     selectBox.classList.add("chooseOne");
     score.innerText = scoreYou + " - " + scoreComputer;
     state.style.transform = "scale(1)";
   }


 }
