// TODO: Declare any global variables we need
var numHeads = 0
var numTails = 0
var totFlips = 0


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    var flipButton  = document.querySelector("#flipCoin")
    var clearButton = document.querySelector("#clearScore")
    var status      = document.querySelector(".status-message")
    var image       = document.querySelector("img")

    var heads       = document.querySelector("#heads")
    var headsPerc   = document.querySelector("#heads-percent")
    var tails       = document.querySelector("#tails")
    var tailsPerc   = document.querySelector("#tails-percent")
    // TODO: Add event listener and handler for flip and clear buttons

    function scoreboard(heads, tails)
    {
        heads.textContent = heads
        tails.textContent = tails
        headsPerc.textContent         = Math.round(heads / (heads + tails) * 100) + "%"
        tailsPerc.textContent         = Math.round(tails / (heads + tails) * 100) + "%"
    }

    flipButton.addEventListener('click', function(){
        // TODO: Determine flip outcome
        let coin = Math.random()

        if (coin > .5)
        {
            console.log("heads")
            //heads
            // update head count
            numHeads = numHeads + 1

            // update flip count
            totFlips ++
            // update the status message
            status.textContent = "You flipped heads"
            // update the image
            image.setAttribute("src", "assets/images/penny-heads.jpg")
        } else {
                        console.log("tails")
            // update head count
            numTails++
            // update flip count
            totFlips ++
            // update the status message
            status.textContent = "You flipped tails"
            // update the image
            image.setAttribute("src", "assets/images/penny-tails.jpg")
        }
        // TODO: Update image and status message in the DOM
        heads.textContent = numHeads
        tails.textContent = numTails
        headsPerc.textContent         = Math.round(numHeads / totFlips * 100) + "%"
        tailsPerc.textContent         = Math.round(numTails / totFlips * 100) + "%"

    })


    clearButton.addEventListener('click', function(){
        var numHeads = 0
        var numTails = 0
        var totFlips = 0
        heads.textContent = numHeads
        tails.textContent = numTails
        headsPerc.textContent         = "0%"
        tailsPerc.textContent         = "0%"

    })

})