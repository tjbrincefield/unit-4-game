
$( document ).ready(function(){
    var Random=Math.floor(Math.random()*120)+19;
    console.log(Random)
    $('#numberRandom').text(Random);

var GeneratedNumbers = []
var total= 0;	
var wins= 0;
var losses = 0;
$('#numberWins').text(wins);
$('#numberLosses').text(losses);		

function fourRandomNumbers(){
for (var i = 0; i < 4; i++) {
    var num = Math.floor(Math.random()*12)+1;
    GeneratedNumbers.push(num);
}
console.log(GeneratedNumbers) 
}

fourRandomNumbers();

function reset(){
    Random=Math.floor(Math.random()*101)+19;
    console.log(Random)
    $('#numberRandom').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total= 0;
    $('#numberScore').text(total);
    } 

function winner(){
alert("You won!!!");
    wins++;	
    $('#numberWins').text(wins);
    reset();
}

function loser(){
alert ("You lose!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();
}


    $('#pink').on ('click', function(){
        total = total + GeneratedNumbers[0];
        console.log("New total= " + total);
        $('#numberScore').text(total);	

                if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }		
    })	

    $('#purple').on ('click', function(){
        total = total + GeneratedNumbers[1];
        console.log("New total= " + total);
        $('#numberScore').text(total);	

                if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#blue').on ('click', function(){
        total = total + GeneratedNumbers[2];
        console.log("New total= " + total);
        $('#numberScore').text(total);

                    if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }	
    })	

    $('#orange').on ('click', function(){
        total = total + GeneratedNumbers[3];
        console.log("New total= " + total);
        $('#numberScore').text(total);	

            
                    if (total == Random){
                    winner();
                }
                else if ( total > Random){
                    loser();
                }
    });  	

});