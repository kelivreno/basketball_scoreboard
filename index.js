let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let scoreHome = 0
let scoreGuest = 0

// Home

function homePlusOne() {
    scoreHome += 1
    homeScore.innerText = scoreHome
}

function homePlusTwo() {
    scoreHome += 2
    homeScore.innerText = scoreHome
}

function homePlusThree() {
    scoreHome += 3
    homeScore.innerText = scoreHome
}

// Guest

function guestPlusOne() {
    scoreGuest += 1
    guestScore.innerText = scoreGuest
}

function guestPlusTwo() {
    scoreGuest += 2
    guestScore.innerText = scoreGuest
}

function guestPlusThree() {
    scoreGuest += 3
    guestScore.innerText = scoreGuest

}

function newGame() {
    scoreGuest = 0
    homeScore.textContent = scoreGuest
    scoreHome = 0
    guestScore.textContent = scoreHome
}