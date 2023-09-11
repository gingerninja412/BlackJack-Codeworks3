let userHand = []
let playedOne = false
let userHandTwo = []
let twoActivated = false
let playedTwo = false
let computerHand = []
let computerStand = false

const deckOfCards = [
    {
        name: "ace",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Spades.png`,
        index: 0
    },
    {
        name: "two",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Spades.png`,
        index: 1
    },
    {
        name: "three",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Spades.png`,
        index: 2
    },
    {
        name: "four",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_spades.png`,
        index: 3
    },
    {
        name: "five",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Spades.png`,
        index: 4
    },
    {
        name: "six",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Spades.png`,
        index: 5
    },
    {
        name: "seven",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_Spades.png`,
        index: 6
    },
    {
        name: "eight",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Spades.png`,
        index: 7
    },
    {
        name: "nine",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Spades.png`,
        index: 8
    },
    {
        name: "ten",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Spades.png`,
        index: 9
    },
    {
        name: "jack",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Spades.png`,
        index: 10
    },
    {
        name: "queen",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Spades.png`,
        index: 11
    },
    {
        name: "king",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Spades.png`,
        index: 12
    },
    {
        name: "ace",
        value: "ace",
        picked: false,
        image: String.raw`images\ace_of_clubs.PNG`,
        index: 13
    },
    {
        name: "two",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_clubs.PNG`,
        index: 14
    },
    {
        name: "three",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_clubs.PNG`,
        index: 15
    },
    {
        name: "four",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Clubs.PNG`,
        index: 16
    },
    {
        name: "five",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_clubs.PNG`,
        index: 17
    },
    {
        name: "six",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_clubs.PNG`,
        index: 18
    },
    {
        name: "seven",
        value: 7,
        picked: false,
        image: String.raw`images\Seven_of_clubs.PNG`,
        index: 19
    },
    {
        name: "eight",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_clubs.PNG`,
        index: 20
    },
    {
        name: "nine",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_clubs.PNG`,
        index: 21
    },
    {
        name: "ten",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_clubs.PNG`,
        index: 22
    },
    {
        name: "jack",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_clubs.PNG`,
        index: 23
    },
    {
        name: "queen",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_clubs.PNG`,
        index: 24
    },
    {
        name: "king",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_clubs.PNG`,
        index: 25
    },
    {
        name: "ace",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_Hearts.png`,
        index: 26
    },
    {
        name: "two",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_Hearts.png`,
        index: 27
    },
    {
        name: "three",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_Hearts.png`,
        index: 28
    },
    {
        name: "four",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_Hearts.png`,
        index: 29
    },
    {
        name: "five",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_Hearts.png`,
        index: 30
    },
    {
        name: "six",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_Hearts.png`,
        index: 31
    },
    {
        name: "seven",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_Hearts.png`,
        index: 32
    },
    {
        name: "eight",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_Hearts.png`,
        index: 33
    },
    {
        name: "nine",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Hearts.png`,
        index: 34
    },
    {
        name: "ten",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Hearts.png`,
        index: 35
    },
    {
        name: "jack",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_Hearts.png`,
        index: 36
    },
    {
        name: "queen",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Hearts.png`,
        index: 37
    },
    {
        name: "king",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Hearts.png`,
        index: 38
    },
    {
        name: "ace",
        value: "ace",
        picked: false,
        image: String.raw`images\Ace_of_diamonds.PNG`,
        index: 39
    },
    {
        name: "two",
        value: 2,
        picked: false,
        image: String.raw`images\Two_of_diamonds.PNG`,
        index: 40
    },
    {
        name: "three",
        value: 3,
        picked: false,
        image: String.raw`images\Three_of_diamonds.PNG`,
        index: 41
    },
    {
        name: "four",
        value: 4,
        picked: false,
        image: String.raw`images\Four_of_diamonds.PNG`,
        index: 42
    },
    {
        name: "five",
        value: 5,
        picked: false,
        image: String.raw`images\Five_of_diamonds.PNG`,
        index: 43
    },
    {
        name: "six",
        value: 6,
        picked: false,
        image: String.raw`images\Six_of_diamonds.PNG`,
        index: 44
    },
    {
        name: "seven",
        value: 7,
        picked: false,
        image: String.raw`images\seven_of_diamonds.PNG`,
        index: 45
    },
    {
        name: "eight",
        value: 8,
        picked: false,
        image: String.raw`images\Eight_of_diamonds.png`,
        index: 46
    },
    {
        name: "nine",
        value: 9,
        picked: false,
        image: String.raw`images\Nine_of_Diamonds.png`,
        index: 47
    },
    {
        name: "ten",
        value: 10,
        picked: false,
        image: String.raw`images\Ten_of_Diamonds.png`,
        index: 48
    },
    {
        name: "jack",
        value: 10,
        picked: false,
        image: String.raw`images\Jack_of_DIamonds.png`,
        index: 49 
    },
    {
        name: "queen",
        value: 10,
        picked: false,
        image: String.raw`images\Queen_of_Diamonds.png`,
        index: 50
    },
    {
        name: "king",
        value: 10,
        picked: false,
        image: String.raw`images\King_of_Diamonds.png`,
        index: 51
    },
]

//screen objects
const instructions = $(".instructions");
const actions = $(".action");
const computerArea = $("#computerHand");
const playerHand = $("#playerHand");
const playerHandTwo = $("#playerHandTwo")
const messageArea = $(".message-board");
const resetButton = $("#Reset")
const table = $(".table")

//processing functions

function showMessage(message){
    let newMessage = $("<p></p>")
    newMessage.text(message)
    messageArea.append(newMessage)
}

function dealCard(hand){
    let card = Math.floor(Math.random() * 52)
    while(deckOfCards[card].picked == true){
        card = Math.floor(Math.random() * 52)
    }
    hand.push(deckOfCards[card])
    deckOfCards[card].picked = true
    let displayCard = $("<img>")
    displayCard.attr("src", deckOfCards[card].image)
    if(hand == userHand){
        playerHand.append(displayCard)
    } else if(hand == userHandTwo){
        playerHandTwo.append(displayCard)
    } else if(hand == computerHand){
        displayCard.attr("src", String.raw`images\playing_card_back.png`)
        computerArea.append(displayCard)
    }
}

//button functions

function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    actions.css("display", "flex")
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    showMessage("you have been dealt two cards")
}

function split(){
    if(userHand.length > 2){
        showMessage("you have more than two cards you can't split")
        return
    }
    if(twoActivated == true){
        showMessage("you already have a second hand")
        return
    }
    if(userHand[0].name == userHand[1].name){
        twoActivated = true
        playerHand.empty()
        let movedCard = userHand.pop()
        userHandTwo.push(movedCard)
        let newImage = $("<img>")
        newImage.attr("src", movedCard.image)
        playerHandTwo.append(newImage)
        let reDisplay = $("<img>")
        reDisplay.attr("src", userHand[0].image)
        playerHand.append(reDisplay)
        dealCard(userHandTwo)
        dealCard(userHand)
    } else{
        showMessage("your cards are not the same")
    }
}

//shows instructions on load
window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
} 
