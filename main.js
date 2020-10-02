//global variables
// testing git push
let pScore = 0;
let cScore = 0;
//start the game
const game = () => {
    // random computer choice
    const choices = ['rock','paper','scissors'];
    const cnumbers = Math.floor(Math.random() * 3);
    let computerChoice = choices[cnumbers];

// ask for choice
let playerchoice = prompt('What is your choice?');
let pchoice = playerchoice.toLocaleLowerCase();
// start round
let round = () => {
    if (pchoice === computerChoice){
        console.log('It is a tie , you get the same');
    }
    else {
        if (pchoice === 'rock'){
            if (computerChoice === 'scissors'){
                console.log('u win, rock beats scissors');
                pScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)

            }
            else {
                console.log('u lose, rocks never beat paper')
                cScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)

            }
            
        }
        else if (pchoice === 'paper'){
            if (computerChoice === 'scissors'){
                console.log('u lose, paper never beat scissors');
                cScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)

            }
            else {
                console.log(' u win, paper beats rock');
                pScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)

            }
        }
        else if (pchoice === 'scissors'){
            if (computerChoice === 'rock'){
                console.log('u lose, scissors never beat rock');
                cScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)

            }
            else {
                console.log('u win, scissors beats paper')
                pScore++
                console.log(`your score is ${pScore} vs ${cScore} for computer`)
            }
        }
        else {
            console.log('choose only between rock, scissors and paper. and pay attention to misstyping.');
        }


        }
}
    

   // call round 
round();
 
}
// call 5 rounds game coz i dunt know about loops yet 
game();
game();
game();
game();
game();
