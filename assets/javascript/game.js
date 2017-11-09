var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0

var losses = 0

var guessleft = 9

    var computerguess = options[Math.floor(Math.random() * options.length)];
    console.log(computerguess);


    // if (guessleft = 0){
    //     var computerguess = options[Math.floor(Math.random() * options.length)];
    //     console.log(computerguess);
    // }
    


document.onkeyup = function () {


    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);

    var picked = "<p>Your guesses so far: " + userguess + "</p>";
    
        document.querySelector("#letters").innerHTML = picked


        // var chosen = []
    // var picked = ["","","","",""];
    // picked.push(userguess);
    

    // var picked = []
    // picked.fill(userguess)

    // var letters = "<p>Letters Chosen: " + picked + "</p>";
    
    //     document.querySelector('#letters').innerHTML = letters;


    if (userguess = options) {

        if (guessleft === 0){
            losses++;
            guessleft + 9;
        }

        if (userguess == computerguess) {
            wins++;
            alert("MATCH!");
        } 
        
        else {
            guessleft--;
        }

        if (guessleft === 0){
            losses++;
            // function myFunction(a, b) {
            //     return a + b;

            //     var a = guessleft;
            //     var b = 9;
            // }
        }
       
    } 
    
    else {
        alert("You must choose a letter 'A-Z'");
    }

    var score = "<h1>****Guess what letter I'm thinking of.....</h1>" +
        "<br>" +
        "<p>Wins: " + wins + "</p>" +
        "<br>" +
        "<p>Losses: " + losses + "</p>" +
        "<br>" +
        "<p>Guesses Left: " + guessleft + "</p>";

    document.querySelector('#main').innerHTML = score;



    // var picked = "<p>Your guesses so far: " + userguess + "</p>";

    // document.querySelector("#letters").innerHTML = picked
    

}

// var picked = [1,2,3,4,5,6,7,8,9];
// picked.fill(userguess);

// var letters = "<p>Letters Chosen: " + picked + "</p>";

//     // document.querySelector('#letters').innerHTML = letters;

//     var picked = ["","","","",""];
//     picked.fill(userguess);
//     document.getElementById("#letters").innerHTML = letters;


    // ************************************************

    // At this point, I've tried a million different things to create an array
    // to automatically fill using the guesses from the user and then display it on the screen. 
    // It just wont Work. 

    // I also tried to get the guessleft to reset back to 9 by making conditions
    // such as if guesses left get reduced to 0, then add 9. but this does not Work in
    // the code no matter where i place it. 

