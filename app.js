/*
GAME FUNCTION:
- Players get total number of 6 tries each reperesnted by a picture
- If the letter is not correct then player can try again
- if the word is correct the input word gets added on the given word 
*/

/* Prgoramming Structure of the Game
We go by Levels
in Level 1 the total no. of letters will be 6
in Level 2 the total no. of letters will be 7
*/
/* Main Program*/
//Level 1 Program
const UIQuestionForm = document.querySelector('.questionForm');
const inputQuestion = document.querySelector('.question');
const questionContainer = document.querySelector('.container');
let maxTries = 6;
let remTries = document.querySelector('#remainingTries');
const answerContainer = document.querySelector('.answer');
const answerBoxUI = document.querySelector('.theWord');
let enterLetterBox = document.querySelector('.enterLetter');
const message = document.querySelector('.message');
const UIform = document.querySelector('.wordsForm');
let count = 0;
const answerArr = [];
let s;
let letters = [];

UIQuestionForm.addEventListener('submit', function(a) {
    a.preventDefault();
    if (inputQuestion.value !== "") {
        document.querySelector(".changeQ").style.visibility = "visible";
    }    
    const question = inputQuestion.value;
    letters = Array.from(inputQuestion.value);
    inputQuestion.value='';
    // inputQuestion.disabled = true;
    console.log(letters);
    for (let i = 0; i<letters.length; i++) {
        answerArr[i] = '_';
    }
    s = answerArr.join(" "); //putting the array on a string.
    // answerContainer.className = 'answer-visible';
    answerBoxUI.innerHTML = s; //printing that string on HTML DOM
});

UIform.addEventListener('submit', function(b) {
    b.preventDefault();
    let insertChar = enterLetterBox.value;
    console.log('The length of the input is ' +enterLetterBox.value.length);
    //check if the letter is in the letters array or not
    if (letters.includes(insertChar) == false) {
        console.log('not in array');
        maxTries-=1;
        remTries.textContent = `${maxTries}`;
    }
            
    //check if the letters is already included
            
    if (answerArr.includes(insertChar) == true) {
                message.textContent = 'The letter is already included';
    }

    letters.forEach(function (i, index) {
        // console.log(i, index);
        console.log(i.indexOf(insertChar));
        if (i.indexOf(insertChar) === 0) {
            // answerArr.splice(index,count, insertChar);
            answerArr[index]= insertChar; // print the insertChar value on the respective index no. of answerArr.
        }
    });

    // If tries are over
    if (maxTries === 0) {
        remTries.parentElement.textContent = 'Game Over';
        enterLetterBox.disabled = true;
    }
    console.log(answerArr);
    let answerstore = answerArr.join(" ");
    answerBoxUI.innerHTML = answerstore;
    enterLetterBox.value = '';
    const answerString = JSON.stringify(answerArr);
    console.log(answerString);
    console.log(typeof(answerString));
    const questionString = JSON.stringify(letters);
    console.log(letters);
    console.log(typeof(questionString));
    
    //When the answer matches the question
    if (answerString === questionString) {
        remTries.parentElement.style.display='none';
        $(".enterLetter").hide();
        document.querySelector('input.btn').value='WINNER';
        document.querySelector('input.btn').disabled='true';
        document.querySelector('.changeQ').style.display = "none";
        document.querySelector('.playAgain').style.display="inline-block";
        document.querySelector('.content2 h1').textContent="CONGRATULATIONS"
        document.querySelector('.content2').style.margin = "100px 50px";
        document.querySelector('.content2').style.transition = '0.5s';
    }
    
});

// // Trial and it WORKED!!!// //For one and i don't know what happened so FUCK THIS!!//
// UIform.addEventListener('keypress', function (c) {
//     if (enterLetterBox.value.length > 0) {
//         alert ("only one letter allowed");
//         enterLetterBox.value="";
//     }
//     else if (enterLetterBox.value.length == 0) {
//         b.preventDefault();
//     let insertChar = enterLetterBox.value;
//     console.log('The length of the input is ' +enterLetterBox.value.length);
//     //check if the letter is in the letters array or not
//     if (letters.includes(insertChar) == false) {
//         console.log('not in array');
//         maxTries-=1;
//         remTries.textContent = `${maxTries}`;
//     }
            
//     //check if the letters is already included
            
//     if (answerArr.includes(insertChar) == true) {
//                 message.textContent = 'The letter is already included';
//     }

//     letters.forEach(function (i, index) {
//         // console.log(i, index);
//         console.log(i.indexOf(insertChar));
//         if (i.indexOf(insertChar) === 0) {
//             // answerArr.splice(index,count, insertChar);
//             answerArr[index]= insertChar; // print the insertChar value on the respective index no. of answerArr.
//         }
//     });

//     // If tries are over
//     if (maxTries === 0) {
//         remTries.parentElement.textContent = 'Game Over';
//         enterLetterBox.disabled = true;
//     }
//     console.log(answerArr);
//     let answerstore = answerArr.join(" ");
//     answerBoxUI.innerHTML = answerstore;
//     enterLetterBox.value = '';
//     const answerString = JSON.stringify(answerArr);
//     console.log(answerString);
//     console.log(typeof(answerString));
//     const questionString = JSON.stringify(letters);
//     console.log(letters);
//     console.log(typeof(questionString));
//     if (answerString === questionString) {
//         remTries.parentElement.style.display='none';
//         $(".enterLetter").hide();
//         document.querySelector('input.btn').value='WINNER';
//         document.querySelector('input.btn').disabled='true';
//         document.querySelector('.changeQ').textContent="Play Again";
//         document.querySelector('.content2 h1').textContent="CONGRATULATIONS"
//         document.querySelector('.content2').style.margin = "100px 50px";
//         document.querySelector('.content2').style.transition = '0.5s';
//     }
    
//     }

// });

//Messaging function
// function setMessage(msg) {
//     message.textContent= msg;
// }

