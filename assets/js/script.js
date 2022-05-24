// TODO: Declare any global variables we need
var numOnes = 0
var numTwos = 0
var numThrees = 0
var numFours = 0
var numFives = 0
var numSixes = 0
var totRolls = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    var flipButton  = document.querySelector("#rollDice")
    var clearButton = document.querySelector("#clearScore")
    var status      = document.querySelector(".status-message")
    var image       = document.querySelector("img")

    var ones       = document.querySelector("#ones")
    var onesPerc   = document.querySelector("#ones-percent")
    var twos       = document.querySelector("#twos")
    var twosPerc   = document.querySelector("#twos-percent")
    var threes       = document.querySelector("#threes")
    var threesPerc   = document.querySelector("#threes-percent")
    var fours       = document.querySelector("#fours")
    var foursPerc   = document.querySelector("#fours-percent")
    var fives       = document.querySelector("#fives")
    var fivesPerc   = document.querySelector("#fives-percent")
    var sixes       = document.querySelector("#sixes")
    var sixesPerc   = document.querySelector("#sixes-percent")
    // TODO: Add event listener and handler for flip and clear buttons

    function scoreboard(ones, twos, threes, fours, fives, sixes)
    {
        ones.textContent = ones
        twos.textContent = twos
        threes.textContent = threes
        fours.textContent = fours
        fives.textContent = fives
        sixes.textContent = sixes
        onesPerc.textContent         = Math.round(ones / (totRolls) * 100) + "%"
        twosPerc.textContent         = Math.round(twos / (totRolls) * 100) + "%"
        threesPerc.textContent        = Math.round(threes / (totRolls) * 100) + "%"
        foursPerc.textContent         = Math.round(fours / (totRolls) * 100) + "%"
        fivesPerc.textContent         = Math.round(fives / (totRolls) * 100) + "%"
        sixesPerc.textContent         = Math.round(sixes / (totRolls) * 100) + "%"
    }

    flipButton.addEventListener('click', function(){
        // TODO: Determine flip outcome
        let dice = Math.round(Math.random() * 6)

        if (dice == 1)
        {
            console.log("one")
            //heads
            // update head count
            numOnes ++

            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a one"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice1.png")
        } 
        else if(dice == 2) 
        {
            console.log("two")
            // update head count
            numTwos++
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a two"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice2.png")
        }
        else if(dice == 3) 
        {
            console.log("three")
            // update head count
            numThrees++
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a three"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice3.png")
        }
        else if(dice == 4) 
        {
            console.log("four")
            // update head count
            numFours++
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a four"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice4.png")
        }
        else if(dice == 5) 
        {
            console.log("five")
            // update head count
            numFives++
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a five"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice5.png")
        }
        else
        {
            console.log("six")
            // update head count
            numSixes++
            // update flip count
            totRolls ++
            // update the status message
            status.textContent = "You rolled a six"
            // update the image
            image.setAttribute("src", "assets/images/dice/dice6.png")
        }
        // TODO: Update image and status message in the DOM
        ones.textContent = numOnes
        twos.textContent = numTwos
        threes.textContent = numThrees
        fours.textContent = numFours
        fives.textContent = numFives
        sixes.textContent = numSixes
        onesPerc.textContent         = Math.round(numOnes / (totRolls) * 100) + "%"
        twosPerc.textContent         = Math.round(numTwos / (totRolls) * 100) + "%"
        threesPerc.textContent        = Math.round(numThrees / (totRolls) * 100) + "%"
        foursPerc.textContent         = Math.round(numFours / (totRolls) * 100) + "%"
        fivesPerc.textContent         = Math.round(numFives / (totRolls) * 100) + "%"
        sixesPerc.textContent         = Math.round(numSixes / (totRolls) * 100) + "%"
        

    })


    clearButton.addEventListener('click', function(){
        var numOnes = 0
        var numTwos = 0
        var numThrees = 0
        var numFours = 0
        var numFives = 0
        var numSixes = 0
        var totRolls = 0
        ones.textContent = numOnes
        twos.textContent = numTwos
        threes.textContent = numThrees
        fours.textContent = numFours
        fives.textContent = numFives
        sixes.textContent = numSixes
        onesPerc.textContent         = "0%"
        twosPerc.textContent         = "0%"
        threesPerc.textContent         = "0%"
        foursPerc.textContent         = "0%"
        fivesPerc.textContent         = "0%"
        sixesPerc.textContent         = "0%"

    })

})