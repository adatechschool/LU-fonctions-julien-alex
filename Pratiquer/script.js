// Déclaration des variables globales
//let lettersTab = [];
let typedLetter = "";

function chooseWord(){
    let tabWord = ["alex"];
    let numRamdom = Math.floor(Math.random() * tabWord.length);
    let motRandom = tabWord[numRamdom];
    return motRandom;
}
//chooseWord();

function replaceCharacters(word,letters){
    let wordInProgress = "";

    for(let i = 0;i<word.length;i++){
       if(letters.indexOf(word[i])== -1){
        wordInProgress = wordInProgress.concat("*");
       }else{
        wordInProgress = wordInProgress.concat(word[i]);
       }
    }
    return wordInProgress;
}    
//replaceCharacters("mot","m");

function getLoneDifferentLetter(pastLetters){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letterInput = prompt("Enter a letter : ");
    while(letterInput.length != 1 || alphabet.indexOf(letterInput) == -1 || pastLetters.indexOf(letterInput) != -1 ){
        letterInput = prompt("Enter one letter : ");
    }
    typedLetter = typedLetter.concat(letterInput);
    return letterInput;
}

//getLoneDifferentLetter("ada");


function letterIsInWord(candidateLetter, chosenWord){

    if(chosenWord.indexOf(candidateLetter) == -1){
        return  false;
    }else{
        return true;
    }
}
// Mise en place du pendu

    //let  = ["||","=","|","-","O","/","\\"];
    let hangManArray = ["==========="];
    hangManArray.push("||        |");
    hangManArray.push("||        O");
    hangManArray.push("||        |");  
    hangManArray.push("||      -----");
    hangManArray.push("||        |");
    hangManArray.push("||       /  \\");
    hangManArray.push("||");
    hangManArray.push("||");
    //sconsole.log(hangManArray);

function jeuDuPendu(){ 
    // tire un mot au hasard
   let guessing_a_word =  chooseWord();
   let wordInProgress = "*";
   // tant que le mot n'a pas été trouvé le joueur à 8 tries
   let numbOfFails = 0;
   while(numbOfFails < 8 && wordInProgress.indexOf("*") != -1){
    // affiche le mot mystère en affichant des * pour les lettres non devinées 
    console.log (wordInProgress);
   // demande à l'utlisateur de choisir une lettre et on lui demande tant que ce n'est pas une lettre ou déjas saisi 
    let enterLetter = getLoneDifferentLetter(typedLetter);
    /*********/
     wordInProgress = replaceCharacters(guessing_a_word,typedLetter);
    /**********/
   // Verifie si la lettre est dans le mot 
   let letterInWord = letterIsInWord(enterLetter,guessing_a_word);
   // si la lettre n'est pas dans le mot on compte une erreur
   if(!letterInWord){
    for (let i = 0;i<numbOfFails;i++){
        console.log(hangManArray[i]);   
    }
    //console.log("Error");
    numbOfFails++;
    // si non on recommance
   } else{
    console.log("GG");
   }
   // construction d'un homme pendu
    }
}
jeuDuPendu();