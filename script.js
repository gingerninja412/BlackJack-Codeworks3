let userHand = []
let computerHand = []
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

//screen objects
const instructions = $(".instructions");
const actions = $(".action");
const computerArea = $("#computerHand");
const playerHand = $("#playerHand");
const messageArea = $("#message");

//processing functions; not tied to a button or dependant on any other functions
function resetGame(){
    userHand.forEach(item => {
        deckOfCards[item.index].picked = false
    })
    computerHand.forEach( item => {
        deckOfCards[item.index].picked = false
        
    })
    userHand = []
    computerHand = []
    computerArea.empty()
    playerHand.empty()
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

//dependant processing functions
function dealCard (player){
    let index = Math.floor((Math.random() * 52))
    while (deckOfCards[index].picked == true){
        index = Math.floor((Math.random() * 52))
    }
    player.push(deckOfCards[index])
    deckOfCards[index].picked = true
}

function computerTurn(){
    let value = calculateTotal(computerHand)
    if(value >= 16){
        computerStand = true
    } else{
        dealCard(computerHand)
    }
}

//TODO create a wincheck or blackjack function 
//TODO need to rewirte the code for the displayment of cards


// These link to buttons and run the game
function startGame(){
    instructions.removeClass("instructionsDown")
    instructions.addClass("instructionsUp")
    actions.css("display", "flex")
    for(let i = 0; i < 2; i++){
        dealCard(userHand)
        dealCard(computerHand)
    }
    
}

function help(){
    instructions.removeClass("instructionsUp")
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
    resetGame() 
}


//loads when the page loads
window.onload = () => {
    instructions.addClass("instructionsDown")
    actions.css("display", "none")
}