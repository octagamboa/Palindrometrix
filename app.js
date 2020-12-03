const closeBtn = document.getElementById("close")
const popUp = document.getElementById("popup")
function closePopUp(){
    closeBtn.addEventListener("click", function(){
        popUp.style.display = "none"
        popUp.style.backgroundColor = "red"

    })
}

closePopUp();
// const
const score = document.getElementById("score")
const inputBtn = document.getElementById("input-btn")
let inputWord = document.getElementById("input-word")
const answerScreen = document.getElementById("answer-screen")

//function add 1 point to score
function addScore (){
    let scoreValue = parseInt(score.innerHTML)
    let points = scoreValue + 1
    score.innerHTML = points
    }

function palindrometrix (){
    inputBtn.addEventListener("click", function(){
    let finalWord = ""
    let wordToLeft = "";
    let inpWrdVlue = inputWord.value;
    let inpWrdUpp = inpWrdVlue.toUpperCase()
    let inputWordValue = inpWrdUpp.replace(/\s+/g, '')

    for(let i = inputWordValue.length-1; i > -1 ; i--){
        wordToLeft += inputWordValue[i];
        }
    
    if(inputWordValue == wordToLeft){
        finalWord = inputWordValue
        validarString(finalWord)
    }
    else {
        answerScreen.style.backgroundColor = "red"
        answerScreen.style.display = "block"
        answerScreen.style.float = "right"
        answerScreen.textContent = "Thats Wrong!!"
        
        inputWord.value = ""
        setTimeout(function(){answerScreen.style.display = "none"}, 2000)
    return false
     
    } 
        
   
    
    })
}

palindrometrix();





function validarString (cadenaAnalizar) {
    for (var i = 0; i< cadenaAnalizar.length; i++) {
          var caracter = cadenaAnalizar.charAt(i);
          if( caracter == "ñ" ||
           caracter == "Ñ" ||
           caracter ==  "1" ||
           caracter ==  "2" ||
           caracter ==  "3" ||
           caracter ==  "4" ||
           caracter ==  "5" ||
           caracter ==  "6" ||
           caracter ==  "7" ||
           caracter ==  "8" ||
           caracter ==  "9" ||
           caracter ==  "0" ||
           caracter ==  "@" ||
           caracter ==  "#" ||
           caracter ==  "$" ||
           caracter ==  "%" ||
           caracter ==  "^" ||
           caracter ==  "&" ||
           caracter ==  "*" ||
           caracter ==  "(" ||
           caracter ==  ")" ||
           caracter ==  "-" ||
           caracter ==  "=" ||
           caracter ==  "+" )
            {
             alert("Invalid Caracter!");
            answerScreen.style.display = "block"
            answerScreen.style.backgroundColor = "red"
             inputWord.value = ""
             
              return false;
           }  else {
               inputWord.value = ""
               answerScreen.style.display = "block"
               answerScreen.style.backgroundColor = "green"
               answerScreen.textContent = "Thats Correct!!"
               answerScreen.style.float = "left"
               setTimeout(function(){answerScreen.style.display = "none"}, 2000)
               addScore()
              return true;
           }
     }
 }  

