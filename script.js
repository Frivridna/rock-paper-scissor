
    const CHOICES = ['Rock', 'Paper', 'Scissor']
    
    let computerChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)]
    //console.log(computerChoice)//
    let userChoice
    let isUserWinner

    const submit = function() {
        computerChoice = CHOICES[Math.floor(Math.random()* CHOICES.length)]
  //<!-- oooooooooooo -->  console.log(e) = event //

    userChoice = document.querySelector('.radio:checked').value
    checkWinner()
    console.log(userChoice, computerChoice, isUserWinner)
    };

const checkWinner = () => {

if(userChoice === 'Rock' && computerChoice === 'Scissor'){
    isUserWinner = true
} else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        isUserWinner = true
} else if (userChoice === 'Scissor' && computerChoice === 'Paper'){
            isUserWinner = true
} else if (userChoice === computerChoice) {
    isUserWinner = false 
} else {
    isUserWinner = false
}
return isUserWinner
}