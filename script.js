
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
    showResult()
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
const showResult = function () {
    switch (isUserWinner) {
        case true:
        document.querySelector('.winner') .style.display = 'block';
        document.querySelector('.looser') .style.display = 'none';
        break
        case false:
        document.querySelector('.winner') .style.display = 'none';
        document.querySelector('.looser') .style.display = 'block';
        break
        default:
        break
        document.querySelector('.winner') .style.display = 'none';
        document.querySelector('.winner') .style.display = 'none';
    }
}