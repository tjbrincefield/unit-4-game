
//sets up random number user is trying to match
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    console.log(Random)
    $('#number').text(Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		


//sets up random numbers for each jewel
function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*11+1);
    GeneratedNumbers.push(num);
}
console.log(GeneratedNumbers) 
}

fourRandomNumbers();


//resets the game
function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#number').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#Combined').text(total);
    } 

//adds the wins to the total
function yay(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text(wins);
    reset();
}

//adds the losses to the total
function loser(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}



//sets up click for jewels
    $('#pink').on ('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                    //sets win/lose conditions
                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }		
    })	

    $('#purple').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('#Combined').text(total);	

                if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#blue').on ('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('#Combined').text(total);

//sets win/lose conditions
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#orange').on ('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#Combined').text(total);	

            
                    if (total == Random){
                    yay();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});