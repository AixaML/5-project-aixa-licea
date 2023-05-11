let clickButton = document.querySelector(".click");
let result = document.querySelector(".result");

clickButton.onclick = function() {
    let userInput = document.querySelector(".store").value;
    let userInput2 = document.querySelector(".date").value;


    if (userInput === "Target" && userInput2 === "Picnic") {

        console.log(userInput);
        result.innerHTML = ("Helix");
    }   
    else if (userInput === "Ross" && userInput2 === "Picnic") {
         console.log(userInput);
         result.innerHTML = ("Upper lobe");
    }
    else if (userInput === "Target" && userInput2 === "Movies") {
 		console.log(userInput); 
        result.innerHTML = ("Nose");
    }
 
	else if (userInput ==="Ross" && userInput2 === "Movies"){ 
        console.log(userInput); 
        result.innerHTML = ("Septum");
    }

};