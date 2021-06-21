// Déclaration des variables globales
let lettersTab = [];
let typedLetter = "";



function chooseWord(){
    let tabWord = ["alex"];
    let numRamdom = Math.floor(Math.random() * tabWord.length);
    let motRandom = tabWord[numRamdom];
    //console.log(motRandom)
    return motRandom;
}
//chooseWord();

function replaceCharacters(word,letters){
    let wordInProgress = "";
    for(let i = 0;i<word.length;i++){
        console.log(word[i]);
       if(letters.indexOf(word[i])== -1){
        wordInProgress += "*";
        //console.log("hey if is here " + wordInProgress);
       }else{
        wordInProgress += word[i];
        //console.log("else here" + wordInProgress);

       }
    }
    //console.log(wordInProgress);
    return wordInProgress;
}    
//replaceCharacters("mot","m");

function getLoneDifferentLetter(pastLetters){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letterInput = prompt("Enter a letter : ");
    while(letterInput.length != 1 || alphabet.indexOf(letterInput) == -1 || pastLetters.indexOf(letterInput) == -1 ){
        letterInput = prompt("Enter one letter : ");
    }
    console.log(letterInput);
    typedLetter += letterInput;
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

function drawHangMan(){
    console.log("x");
}

function jeuDuPendu(){ 
    // tire un mot au hasard
   let guessing_a_word =  chooseWord();
   // tant que le mot n'a pas été trouvé le joueur à 8 tries
   let numbOfFails = 0;
   while(numbOfFails < 8){
    // affiche le mot mystère en affichant des * pour les lettres non devinées 
   console.log(replaceCharacters(guessing_a_word,typedLetter));
   // demande à l'utlisateur de choisir une lettre et on lui demande tant que ce n'est pas une lettre ou déjas saisi 
    let enterLetter = getLoneDifferentLetter(typedLetter);
   // Verifie si la lettre est dans le mot 
   let letterInWord = letterIsInWord(enterLetter,guessing_a_word);
   // si la lettre n'est pas dans le mot on compte une erreur
   console.log(enterLetter); 
   console.log(letterInWord); 
   console.log(typedLetter);
   if(!letterInWord){
    console.log("Error");
    numbOfFails++;
    // si non on recommance
   } else{
    console.log("GG");
   }
   // construction d'un homme pendu
   drawHangMan();
    }
}
jeuDuPendu();