let gameSeq=[];
let userSeq=[];

let allbtns = document.querySelectorAll(".btn");
  
let btns  =[ "yellow","red","purple","green"];

let started = false;
let level = 0;

let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
if (started == false){
    console.log("game is started");
    started = true;
    levelUp();
}
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
} 

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
} 

function levelUp(){
    userSeq=[];
     level++;
     h2.innerText=`Level : ${level}`;


     // random btn choose
      let randIdx=Math.floor(Math.random()*3); 
      let randColor= btns[randIdx];
      let randbtn=document.querySelector(`.${randColor}`);
      gameSeq.push(randColor);
       console.log(gameSeq);
      gameFlash(randbtn);

};

function checkAns(idx){
if ((userSeq[idx]==gameSeq[idx])){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
        console.log("same value")
    }else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        h2.innerHTML=`Game is over ! Your score was <b>${level}</b> <br/> Press any key to start.`;
        reset();
    }
}


function btnPress(){
    
    let btn=this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    
    userSeq.push(userColor);
    checkAns(userSeq.length-1); 
}

  for( btn of allbtns){
    btn.addEventListener("click", btnPress);
  } 

  function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
  }