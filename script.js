let userHand = []
let computerHand = []
let computerStand = false
let gameOver = false
//All cards have been designed by Mark Velasquez
const deckOfCards = [
    {
        name: "ace of spades",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Spades.png`,
        index: 0
    },
    {
        name: "two of spades",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Spades.png`,
        index: 1
    },
    {
        name: "three of spades",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Spades.png`,
        index: 2
    },
    {
        name: "four of spades",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_spades.png`,
        index: 3
    },
    {
        name: "five of spades",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Spades.png`,
        index: 4
    },
    {
        name: "six of spades",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Spades.png`,
        index: 5
    },
    {
        name: "seven of spades",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_Spades.png`,
        index: 6
    },
    {
        name: "eight of spades",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Spades.png`,
        index: 7
    },
    {
        name: "nine of spades",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Spades.png`,
        index: 8
    },
    {
        name: "ten of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Spades.png`,
        index: 9
    },
    {
        name: "jack of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Spades.png`,
        index: 10
    },
    {
        name: "queen of spades",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Spades.png`,
        index: 11
    },
    {
        name: "king of spades",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Spades.png`,
        index: 12
    },
    {
        name: "ace of clubs",
        value: "ace",
        picked: false,
        image: String.raw`images\ace_of_clubs.PNG`,
        index: 13
    },
    {
        name: "two of clubs",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_clubs.PNG`,
        index: 14
    },
    {
        name: "three of clubs",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_clubs.PNG`,
        index: 15
    },
    {
        name: "four of clubs",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Clubs.PNG`,
        index: 16
    },
    {
        name: "five of clubs",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_clubs.PNG`,
        index: 17
    },
    {
        name: "six of clubs",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_clubs.PNG`,
        index: 18
    },
    {
        name: "seven of clubs",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_clubs.PNG`,
        index: 19
    },
    {
        name: "eight of clubs",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_clubs.PNG`,
        index: 20
    },
    {
        name: "nine of clubs",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_clubs.PNG`,
        index: 21
    },
    {
        name: "ten of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_clubs.PNG`,
        index: 22
    },
    {
        name: "jack of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_clubs.PNG`,
        index: 23
    },
    {
        name: "queen of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_clubs.PNG`,
        index: 24
    },
    {
        name: "king of clubs",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_clubs.PNG`,
        index: 25
    },
    {
        name: "ace of hearts",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Hearts.png`,
        index: 26
    },
    {
        name: "two of hearts",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Hearts.png`,
        index: 27
    },
    {
        name: "three of hearts",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Hearts.png`,
        index: 28
    },
    {
        name: "four of hearts",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Hearts.png`,
        index: 29
    },
    {
        name: "five of hearts",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Hearts.png`,
        index: 30
    },
    {
        name: "six of hearts",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Hearts.png`,
        index: 31
    },
    {
        name: "seven of hearts",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_Hearts.png`,
        index: 32
    },
    {
        name: "eight of hearts",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Hearts.png`,
        index: 33
    },
    {
        name: "nine of hearts",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Hearts.png`,
        index: 34
    },
    {
        name: "ten of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Hearts.png`,
        index: 35
    },
    {
        name: "jack of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Hearts.png`,
        index: 36
    },
    {
        name: "queen of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Hearts.png`,
        index: 37
    },
    {
        name: "king of hearts",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Hearts.png`,
        index: 38
    },
    {
        name: "ace of diamonds",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_diamonds.PNG`,
        index: 39
    },
    {
        name: "two of diamonds",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_diamonds.PNG`,
        index: 40
    },
    {
        name: "three of diamonds",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_diamonds.PNG`,
        index: 41
    },
    {
        name: "four of diamonds",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_diamonds.PNG`,
        index: 42
    },
    {
        name: "five of diamonds",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_diamonds.PNG`,
        index: 43
    },
    {
        name: "six of diamonds",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_diamonds.PNG`,
        index: 44
    },
    {
        name: "seven of diamonds",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_diamonds.PNG`,
        index: 45
    },
    {
        name: "eight of diamonds",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_diamonds.png`,
        index: 46
    },
    {
        name: "nine of diamonds",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Diamonds.png`,
        index: 47
    },
    {
        name: "ten of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Diamonds.png`,
        index: 48
    },
    {
        name: "jack of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_DIamonds.png`,
        index: 49 
    },
    {
        name: "queen of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Diamonds.png`,
        index: 50
    },
    {
        name: "king of diamonds",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Diamonds.png`,
        index: 51
    },
]

//TODO: change the styling
//screen objects
const instructions = $(".instructions");
const actions = $(".action");
const computerArea = $("#computerHand");
const playerHand = $("#playerHand");
const messageArea = $(".message-board");
const resetButton = $("#Reset")
const table = $(".table")

//audio resources
const shuffleSound = $("#cardShuffle")
const shuffleSoundTwo = $("#cardShuffleTwo")
const dealCardSound = $("#dealCards")
const winSound = $("#winSound")
const loseSound = $("#loseSound")

//processing functions
function showComputerCards() {
    computerArea.empty()
    computerHand.forEach( item => {
        let newCard = $("<img>")
        newCard.attr("src", item.image)
        computerArea.append(newCard)
    })
}

function resetGame(){
    userHand.forEach(item => {
        deckOfCards[item.index].picked = false
    })
    computerHand.forEach(item =>{
        deckOfCards[item.index].picked = false
    })
    userHand = []
    computerHand = []
    messageArea.empty()
    computerArea.empty()
    playerHand.empty()
    gameOver = false
    computerStand = false
    actions.css("display", "flex")
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    checkForBlackjack()
    if(gameOver == false){
        showMessage("you have been dealt two cards choose an option on the left")
    }
}

function removePlayButtons(){
    actions.css("display", "none")
    resetButton.css("display", "flex")
}

function showMessage(message){
    let newMessage = $("<p></p>")
    if(messageArea.children() > 4){
        messageArea.first().remove()
    }
    newMessage.text(message)
    messageArea.append(newMessage)
}

function displayPlayerCard(card){
    let newCard = $("<img>")
    newCard.attr("src", card.image)
    playerHand.append(newCard)
}

function displayComputerHand(){
    let newCard = $("<img>")
    newCard.attr("src", String.raw`images\playing_card_back.png`)
    computerArea.append(newCard)
}

function dealCard (player){
    let card = Math.floor((Math.random() * 52))
    while (deckOfCards[card].picked == true){
        card = Math.floor((Math.random() * 52))
    }
    player.push(deckOfCards[card])
    deckOfCards[card].picked = true
    if(player == userHand){
        displayPlayerCard(deckOfCards[card])
    } else if(player == computerHand){
        displayComputerHand()
    }
}

function calculateTotal(hand) {
    let total = 0;
    let aces = 0;
    for(let i = 0; i < hand.length; i++){
        if(hand[i].value == "ace"){
            aces += 1
        } else{
            total += hand[i].value
        }
    }
    if(aces != 0){
        if(aces == 1){
            if(total < 11){
                total += 11
            } else{
                total++
            }
        } else if(aces > 1){
            if(total < 11){
                total = total + (aces - 1)
            } else if(total >= 11){
                total = total + aces
            }
        }
    }
    return total
}


function checkForBlackjack(){
    let userTotal = calculateTotal(userHand)
    let computerTotal = calculateTotal(computerHand)
    if(userTotal == 21){
        gameOver = true
        showMessage("You won with a blackjack")
        removePlayButtons()
        showMessage("press reset to play again")
        showComputerCards()
        winSound[0].play()
    } else if(userTotal > 21){
        gameOver = true
        showMessage("you went bust")
        removePlayButtons()
        showMessage("press reset to play again")
        showComputerCards()
        loseSound[0].play()
    } else if(computerTotal == 21){
        gameOver = true
        showMessage("The computer won with a blackjack")
        removePlayButtons()
        showMessage("press reset to play again")
        showComputerCards()
        loseSound[0].play()
    } else if(computerTotal > 21){
        showMessage("the computer went bust, you win")
        removePlayButtons()
        gameOver = true
        showMessage("press reset to play again")
        showComputerCards()
        winSound[0].play()
    }
}

function computerTurn(){
    if(computerStand == false){
        if(calculateTotal(computerHand) < 16){
            dealCard(computerHand)
            showMessage("the computer hit")
        } else{
            computerStand = true
            showMessage("the computer is standing")
        }
    }
}

//functions tied to buttons
function help(){
    instructions.removeClass("instructionsUp")
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}

function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    actions.css("display", "flex")
    shuffleSound[0].play()
    resetGame()
}

function hit(){
    dealCard(userHand)
    computerTurn()
    checkForBlackjack()
    dealCardSound[0].play()
}

function stand(){
    while(computerStand == false && gameOver == false){
        computerTurn()
        checkForBlackjack()
    }
    if(gameOver == false){
        let computerTotal = calculateTotal(computerHand)
        let userTotal = calculateTotal(userHand)
        removePlayButtons()
        if(computerTotal > userTotal){
            showMessage("you lost, the computer got a better hand")
            loseSound[0].play()
        } else if(userTotal > computerTotal){
            showMessage("you won, your hand was better than the computer")
            winSound[0].play()
        } else if(userTotal == computerTotal){
            showMessage("you and the computer had equal hands, the computer wins")
            loseSound[0].play()
        }
        console.log("got here")
        showComputerCards()
    }
}

//shows instructions on load
window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
} 
