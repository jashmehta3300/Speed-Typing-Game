window.addEventListener('load', onLoad);

const seconds=document.getElementById("seconds");
const currentWord=document.getElementById("current-word");
const wordInput=document.getElementById("word-input");
const message=document.getElementById("message");
const timeDisplay=document.getElementById("time");
const scoreDisplay=document.getElementById("score");
const highScore123=document.getElementById("highScore");

let isPlaying = true;

var levels={
    easy:5,
    medium:4,
    hard:3,
    veryHard: 2
}



var currentLevel=levels.easy;
var time=currentLevel;
var score=0;



//Array of words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'old',
    'among',
    'fifty',
    'court',
    'correct',
    'handsome',
    'safe',
    'build',
    'breath',
    'circus',
    'chicken',
    'medicine',
    'stronger',
    'charge',
    'height',
    'composition',
    'library',
    'hand',
    'deer',
    'then',
    'stared',
    'village',
    'care',
    'total',
    'thumb',
    'sharp',
    'air',
    'manufacturing',
    'me',
    'create',
    'biggest',
    'attack',
    'atmosphere',
    'range',
    'son',
    'shade',
    'fair',
    'inside',
    'private',
    'elephant',
    'living',
    'according'
  ];





function onLoad()
{
    seconds.innerHTML=currentLevel;

    // show random word
    Wordchange(words);    
    wordInput.addEventListener("input",checking);

    // Call countdown every second
    setInterval(timeRunOut, 1000);

    // Check game status every 50 miliseconds
    setInterval(gameStatus, 900);
}





// function to show and change a random word from array..
  function Wordchange(words)
  {
    var rand =Math.floor(Math.random()*words.length);
  
    var newWord=words[rand];  

    currentWord.innerHTML=newWord;

  }





// Start match
function checking() 
{
  if(isPlaying == true)
  {
    if (wordMatching()) 
    {
      isPlaying = true;
      time = currentLevel + 1;
      Wordchange(words);
      wordInput.value = '';
      score++;
    }
  
    // If score is -1, display 0
    if (score === -1) {
      scoreDisplay.innerHTML = 0;
    } else {
      scoreDisplay.innerHTML = score;
    }
  }
}





function wordMatching()
{
    
   var value= wordInput.value;

   //Word is entered correctly
   if(value==currentWord.innerHTML)
   {
      message.innerHTML="Correct!";
      return true;
   }

   //Word is entered incorrectly
   else
   {
       message.innerHTML="";
       return false;
   }

}






function timeRunOut()
{

//Game is on  
if(time>0)
{
    time--;
}

//Game over
else if(time===0)
{
  isPlaying=false;
}

// time display
timeDisplay.innerHTML=time;
}





var currentScore;
var details = [];
var details2= [];
// game Status checking..
function gameStatus()
{

    if(!isPlaying  && time===0)
    {
      message.innerHTML="GameOver!<br> It will restart after 8 sec";
      score = -1;
      
      function timedRefresh(timeoutPeriod) 
      {
        setTimeout("location.reload(true);",timeoutPeriod);
      }
    
      window.onload = timedRefresh(8000);
    }

    if(score >= 10)
    {
      currentLevel = levels.medium;
      seconds.innerHTML = "4";
    }

    if(score >= 15)
    {
      currentLevel = levels.hard;
      seconds.innerHTML = "3";
    }

    if(score >= 20)
    {
      currentLevel = levels.veryHard;
      seconds.innerHTML = "2";
    }
}