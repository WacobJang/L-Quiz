// cost is variable. 
const flashcards = document.getElementsByClassName ("flashcards")[0]; 
//block scoped local variables from classname "flashcards" [0] represents the index of flashcards (only 1 class flashcards so we go with 0)
const createBox = document.getElementsByClassName ("create_box")[0];
// same but for classname create_box
const question = document.getElementById("question"); 
// same but for id question (can only have 1 specific id)
const answer = document.getElementById("answer"); 
// same 

// create an array that holds data from the flashcards. Checks to see if there is an existing localStorage
let contentArray = localStorage.getItem('items') ? 
JSON.parse(localStorage.getItem("items")) : []; 

contentArray.forEach(divMaker); // displays previously saved info on the storage 

//EFFECTS: a new flashcard is a div (general container for flow content (body elements))
function divMaker(text){
  var div = document.createElement("div"); //creates a div element (flashcard) 
  var h2_question = document.createElement("h2"); //creates a question element for the div
  var h2_answer = document.createElement("h2"); //creates a answer element  div 

  div.className = 'flashcard'; // sets the new div object (flashcard) into class flashcard 

  h2_question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  //sets the atributes (css) of the question 
  
  h2_question.innerHTML = text.my_question; //inserts the question into the innerHTML (question text field) 
  // also uses the key"my_question " to access the value"

  h2_answer.setAttribute("style", "text-align:centre; display:none; color:red")
  //sets the answer atributes (Css)
  h2_answer.innerHTML = text.my_answer; //inserts the question into the innerHTML (answer text field)
  // also uses the key"my_answer " to access the value"

  div.appendChild(h2_question); // add the question to the div element 
  div.appendChild(h2_answer);  // add the answer to the div element 

  // EFFECTS: if click the flashcard, shows or hides the answer 
  div.addEventListener("click", function(){
    if(h2_answer.style.display == "none")
      h2_answer.style.display = "block";
    else
      h2_answer.style.display = "none";
  });

  flashcards.appendChild(div); //adds the div (flashcard) to the flashcards container 
  }


// EFFECTS: when the save button is clickec
function addFlashCard() {
  var flashcard_info = {
    'my_question' : question.value, // stores user question input as key and value like Map
    'my_answer' : answer.value // stores user answer input input as key and value like Map 


  }

  contentArray.push(flashcard_info); // pushes the question and answer info into the local storage 
  localStorage.setItem('items', JSON.stringify(contentArray)); // sets the info into key "items", and value in JSON object 
  divMaker(contentArray[contentArray.length - 1]); 
  //divMaker is fcn that displays onto the screen. Since we just added an item, the index of the info is size - 1

  question.value = ""; //clears the input field of the textarea box
  answer.value = ""; //clears the input field of the textarea box 

}

// EFFECTS:  when delete cards button is clicked, it clears the local storage, sets the text content of the element (innerHTML)
//           to empty string, and sets the storage to empty set 
function deleteCards(){
  localStorage.clear();
  flashcards.innerHTML = ''; 
  contentArray = []; 
}

// EFFECTS: when close button is clicked, it hides the create flashcard box 
function hideCreateBox(){
  createBox.style.display = "none"; 
}

//EFFECTS: when new card button is clicked, it sets the visibility of the create flashcard box to true (visible) 
function createNewCard() {
  createBox.style.display = "block"; 
}