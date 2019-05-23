var sections; //contains the section divs that contain the puzzles
var sectionPuzzles;
var puzzleNavBtns;
var sectionNavBtns;
var fields;
var sliders;
var sliderStyles;
var colourFields;
var colourBox;
var puzzlesStates;

function checkLock(section) {
    if (section > 0 && section < 4) {
        if( puzzlesStates[section-1][0] && puzzlesStates[section-1][1] &&       puzzlesStates[section-1][2]){

            console.log('unlocked section ' + (section+1));
            document.querySelectorAll('.puzzle-section img')[section]["src"] = "Assets/Images/unlocked-lock.png";
            sections[section].classList.remove('locked');
        }else{
            console.log(status);
        }
    }
}

//Crossword
function validatePuzzle1() {
    /* Check for the answer */
    var value = document.querySelector('#puzzle1-word').value; 
    if( value == 19 || value.toLowerCase == "nineteen"){
        alert('Puzzle 1 complete');
        console.log('puzzle 1 validated');
        puzzlesStates[0][0] = true;
        puzzleNavBtns[0][0].classList.add('completed');
        checkLock(1);
    }
}
//Colour code
function validatePuzzle2a(){
    /* Check for the answer */
    var red = sliders[0].value;
    var green = sliders[1].value;
    var blue = sliders[2].value;
    if( red == 239 && green == 253 && blue == 95){
        console.log('puzzle 2 colour found');
        document.querySelector('#puzzle3-response').classList.remove("invisible");
        document.querySelector('#colour-name').textContent = "Lemon";
    }
}
function validatePuzzle2b(){
    /* Check for the answer */
    var value = document.querySelector('#puzzle2-result').value; 
    if( value == 5 || value.toLowerCase == "five"){
        console.log('puzzle 2 validated');
        puzzlesStates[0][1] = true;
        puzzleNavBtns[0][1].classList.add('completed');
        alert('Puzzle 2 complete');
        checkLock(1);
    }
}

//Algorithm
function validatePuzzle3(){
    /* Check for the answer */
    var data = document.querySelector('#puzzle3-result').value
    if( data == 8){
        alert('Puzzle 3 complete');
        console.log('puzzle 3 validated');
        puzzlesStates[0][2] = true;
        puzzleNavBtns[0][2].classList.add('completed');
        checkLock(1);
    }
}

//Phishing Puzzle
function validatePuzzle4(){
    /* Check for the answer */
    var user = document.querySelector('#puzzle4-user').value;
    var pass = document.querySelector('#puzzle4-password').value;
    if( user == "corrylawson" && pass == "livingin2099"){
        alert('Puzzle 4 complete');
        console.log('puzzle 4 validated');
        puzzlesStates[1][0] = true;
        puzzleNavBtns[1][0].classList.add('completed');
        checkLock(2);
    }
}

function validateRecovery(){
    console.log("trying");
    var dogname = document.querySelector('#pet-field').value; 
    var school = document.querySelector('#school-field').value;
    var farewell = document.querySelector('#farewell-field').value;
    dogname = dogname.toLowerCase();
    school = school.toLowerCase();
    farewell = farewell.toLowerCase();
    console.log(dogname + ", " + school + ", " + farewell);
    if(dogname == "bo" && (school == "university of brighton" || school == "the university of brighton" || school == "uni of brighton" || school == "the uni of brighton" || school == "brighton uni") && farewell == "live long and prosper"){
        console.log('recovery complete');
        document.querySelector('#password-field').textContent = "Your password is: livingin2099";
    }
    
}

function showRecovery(){
    document.querySelector('#recovery').classList.remove('invisible');
    document.querySelector('#login').classList.add('invisible');
}
function showLogin(){
    document.querySelector('#login').classList.remove('invisible');
    document.querySelector('#recovery').classList.add('invisible');
}

//Caesars Cipher
function validatePuzzle5(){
    /* Check for the answer */
    var data = document.querySelector('#puzzle5-decrypt').value;
    if( 5 == 5){
        alert('Puzzle 5 complete');
        console.log('puzzle 5 validated');
        puzzlesStates[1][1] = true;
        puzzleNavBtns[1][1].classList.add('completed');
        checkLock(2);
    }
}

function validatePuzzle6() {
    /* Check for the answer */
    var value = document.querySelector('#puzzle6-result').value; 
    if( value.toLowerCase == "silence"){
        alert('Puzzle 6 complete');
        console.log('puzzle 6 validated');
        puzzlesStates[1][2] = true;
        puzzleNavBtns[1][2].classList.add('completed');
        checkLock(2);
    }
}

//
function validatePuzzle6() {
    /* Check for the answer */
    var value = document.querySelector('#puzzle6-result').value; 
    if( value.toLowerCase == "silence"){
        alert('Puzzle 6 complete');
        console.log('puzzle 6 validated');
        puzzlesStates[1][2] = true;
        puzzleNavBtns[1][2].classList.add('completed');
        checkLock(2);
    }
}
//
function validatePuzzle7(){
    /* Check for the answer */
    var data = document.querySelector('puzzle7-binary').value;
    if( data == 197){
        alert('Puzzle 7 complete');
        console.log('puzzle 7 validated');
        puzzlesStates[2][0] = true;
        puzzleNavBtns[2][0].classList.add('completed');
        checkLock(3);
    }
}
//
function validatePuzzle8(){
    /* Check for the answer */
    var elements = document.querySelectorAll('#instructions td');
    if( 8 == 8){
        alert('Puzzle 8 complete');
        console.log('puzzle 8 validated');
        puzzlesStates[2][1] = true;
        puzzleNavBtns[2][1].classList.add('completed');
        checkLock(3);
    }
}
//
function validatePuzzle9(){
    /* Check for the answer */
    var data = document.querySelector('#puzzle9-field');
    if( 9 == 9){
        alert('Puzzle 9 complete');
        console.log('puzzle 9 validated');
        puzzlesStates[2][2] = true;
        puzzleNavBtns[2][2].classList.add('completed');
        checkLock(3);
    }
}
//
function terminateSystemsAlpha(){

}


function setActiveSection(section){
    if( !sections[section-1].classList.contains('locked') ){
        for(var i =0; i < sections.length; i++){
            sections[i].classList.add('invisible');
            sectionNavBtns[i].classList.remove('active-section');
        }
        sectionNavBtns[section-1].classList.add('active-section');
        sections[section-1].classList.remove('invisible');
    }
}

function setActivePuzzle(section, puzzle) {
        for(var i = 0; i< sectionPuzzles[section-1].length; i++){
            sectionPuzzles[section-1][i].classList.add('invisible');
            puzzleNavBtns[section-1][i].classList.remove('active-puzzle');
        }
        puzzleNavBtns[section-1][puzzle-1].classList.add("active-puzzle");
        sectionPuzzles[section-1][puzzle-1].classList.remove("invisible");
}

/* Puzzle 2 */
function setColourValueNum(index){
    var col;
    switch(index){
        case 0:
            col = colourFields[index].value + ",0,0";
            break;
        case 1:
            col = "0,"+colourFields[index].value + ",0";
            break;
        case 2:
            col = "0,0,"+colourFields[index].value;
            break;
    }
    sliderStyles[index].innerHTML = "#slider-"+(index+1)+"::-webkit-slider-runnable-track{ background: rgb(" + col + "); }; "
    
    sliders[index].value = colourFields[index].value;
    setColourBox();
}

function setColourValueSlide(index){
    var col;
    switch(index){
        case 0:
            col = colourFields[index].value + ",0,0";
            break;
        case 1:
            col = "0,"+colourFields[index].value + ",0";
            break;
        case 2:
            col = "0,0,"+colourFields[index].value ;
            break;
    }
    sliderStyles[index].innerHTML = "#slider-"+(index+1)+"::-webkit-slider-runnable-track{ background: rgb("+col+ "); }; "
    colourFields[index].value = sliders[index].value;
    setColourBox();
}
function setColourBox(){
    colourBox.style.background = 'rgb('+sliders[0].value+','+sliders[1].value+','+sliders[2].value+')';
}

/* puzzle 3 */
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}




/* puzzle 8 */
var instructions = [];

function directionClick(direction){
    if(instructions.length < 10){
        instructions.push(direction);
        switch(direction){
            case 1:
                fields[instructions.length-1].innerHTML = '&#8679';
                break;
            case 2:
                fields[instructions.length-1].innerHTML = '&#8678';
                break;
            case 3:
                fields[instructions.length-1].innerHTML = '&#8680';
                break;
            case 4:
                fields[instructions.length-1].innerHTML = '&#8681' ;
                break;
        }
        
        if(instructions.length >= 10){
            validatePuzzle8();
        }
    }else{
        //array is full
    }
}
function clearInstructions(){
    instructions = [];
    fields.forEach(function(entry){
        entry.textContent = "_";
    });
    
}
function deleteLast(){
    fields[instructions.length-1].textContent = "_"
    instructions.pop();
}

function unlockAll(){
    puzzlesStates.forEach(function (entry){
       entry = true; 
    });
    for(var i = 0; i < sections.length; i++){
        sections[i].classList.remove('locked');
    }
}

/* Initilisation */
window.addEventListener('load', function () {
    sections = document.querySelectorAll('.section');
    sections.forEach(function (entry) {
        entry.classList.add('invisible');
    });
    sections[0].classList.remove('invisible');
    sectionPuzzles = [
        [   document.getElementById("s1-p1"), document.getElementById("s1-p2"), document.getElementById("s1-p3")],
        [   document.getElementById("s2-p1"), document.getElementById("s2-p2"), document.getElementById("s2-p3")],
        [   document.getElementById("s3-p1"), document.getElementById("s3-p2")]
    ];
    sectionNavBtns = document.querySelectorAll('.puzzle-section');
    var btns = document.querySelectorAll('.puzzle-num-nav');
    puzzleNavBtns = [
        [btns[0], btns[1], btns[2]],
        [btns[3], btns[4], btns[5]],
        [btns[6], btns[7]]
    ];
    sections.forEach(function (entry) {
        entry.classList.add('invisible');
    });
    sectionPuzzles.forEach(function (entry) {
        entry.forEach(function (element) {
            element.classList.add('invisible');
        });
    });
    setActivePuzzle(2, 1);
    setActivePuzzle(3, 1);
    setActiveSection(1);
    setActivePuzzle(1, 1);
    fields = document.querySelectorAll("#instructions td");
    
    sliders = document.querySelectorAll('.slider');
    sliderStyles = document.querySelectorAll('.sliderColorStyle');
    colourFields = document.querySelectorAll('.colour-value');
    
    colourBox = document.querySelector('#colour-box');
    setColourBox();
    
    puzzlesStates = [  [false, false, false] ,
                [false, false, false],
                [false, false]             ];
    
    dragElement(document.getElementById("drag-box"));

    unlockAll();
});

