let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let foulHome = document.getElementById("foul-home")
let foulGuest = document.getElementById("foul-guest")

let homeName = document.getElementById("home-el")
let guestName = document.getElementById("guest-el")


let scoreHome = 0
let scoreGuest = 0

let homeFoul = 0
let guestFoul = 0

// Home

function homePlusOne() {
    scoreHome += 1
    homeScore.innerText = scoreHome
    updateLeader()
}

function homePlusTwo() {
    scoreHome += 2
    homeScore.innerText = scoreHome
    updateLeader()
}

function homePlusThree() {
    scoreHome += 3
    homeScore.innerText = scoreHome
    updateLeader()
}

// Guest

function guestPlusOne() {
    scoreGuest += 1
    guestScore.innerText = scoreGuest
    updateLeader()
}

function guestPlusTwo() {
    scoreGuest += 2
    guestScore.innerText = scoreGuest
    updateLeader()
}

function guestPlusThree() {
    scoreGuest += 3
    guestScore.innerText = scoreGuest
    updateLeader()

}
function foulHomeUpdate(){
    homeFoul += 1
    foulHome.textContent = homeFoul
}

function foulGuestUpdate(){
    guestFoul += 1
    foulGuest.textContent = guestFoul
}

function newGame() {
    scoreGuest = 0
    homeScore.textContent = scoreGuest
    scoreHome = 0
    guestScore.textContent = scoreHome
  
    homeFoul = 0
    foulHome.textContent = homeFoul
    guestFoul = 0
    foulGuest.textContent = guestFoul
    
    updateLeader()
}

function updateLeader() {
    if (scoreGuest > scoreHome){
        guestName.style.color = 'red'
        homeName.style.color = '#EEEEEE'
    } else if (scoreGuest < scoreHome) {
        homeName.style.color = 'red'
        guestName.style.color = '#EEEEEE'
    } else if (scoreGuest === scoreHome) {
        homeName.style.color = '#EEEEEE'
        guestName.style.color = '#EEEEEE'
    } else  {
        homeName.style.color = '#EEEEEE'
        guestName.style.color = '#EEEEEE'
    }
}