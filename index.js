
// update scores and stats
function updateHomeMiss(points) {
    switch (points) {
        case 1:
            homeStats[2][1] += 1;
            break;
        case 2:
            homeStats[0][1] += 1;
            break;
        case 3:
            homeStats[0][1] += 1;
            homeStats[1][1] += 1;
            break;
    }
    updateHomeTable();

    console.log(`${min}:${sec} H1 - HOME Two point shot missed. - ${awayScore} - ${homeScore}.`)
}

function updateAwayMiss(points) {  
    switch (points) {
        case 1:
            awayStats[2][1] += 1;
            break;
        case 2:
            awayStats[0][1] += 1;
            break;
        case 3:
            awayStats[0][1] += 1;
            awayStats[1][1] += 1;
            break;
    }
    updateAwayTable();
}

function updateHomeScore(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;

    switch (points) {
        case 1:
            homeStats[2][0] += 1;
            homeStats[2][1] += 1;
            break;
        case 2:
            homeStats[0][0] += 1;
            homeStats[0][1] += 1;
            break;
        case 3:
            homeStats[0][0] += 1;
            homeStats[0][1] += 1;
            homeStats[1][0] += 1;
            homeStats[1][1] += 1;
            break;
    }

    updateHomeTable();
}

function updateAwayScore(points) {
    awayScore += points;
    awayScoreEl.textContent = awayScore;
    
    switch (points) {
        case 1:
            awayStats[2][0] += 1;
            awayStats[2][1] += 1;
            break;
        case 2:
            awayStats[0][0] += 1;
            awayStats[0][1] += 1;
            break;
        case 3:
            awayStats[0][0] += 1;
            awayStats[0][1] += 1;
            awayStats[1][0] += 1;
            awayStats[1][1] += 1;
            break;
    }
    
    updateAwayTable();
}

// update and render stats tables
function updateAwayTable() {
    let fgEl = document.getElementById('FG-away');
    let fg3El = document.getElementById('3PT-away');
    let ftEl = document.getElementById('FT-away');

    ftEl.textContent = `${awayStats[2][0]} - ${awayStats[2][1]}`;
    fgEl.textContent = `${awayStats[0][0]} - ${awayStats[0][1]}`;
    fg3El.textContent = `${awayStats[1][0]} - ${awayStats[1][1]}`;

    let fgpercEl = document.getElementById('FG-prc-away');
    let fg3percEl = document.getElementById('3PT-prc-away');
    let ftpercEl = document.getElementById('FT-prc-away');

    fgpercEl.textContent = `${Math.round(100 * awayStats[0][0] / awayStats[0][1])}%`;
    fg3percEl.textContent = `${Math.round(100 * awayStats[1][0] / awayStats[1][1])}%`;
    ftpercEl.textContent = `${Math.round(100 * awayStats[2][0] / awayStats[2][1])}%`;

}

function updateHomeTable() {
    let fgEl = document.getElementById('FG-home');
    let fg3El = document.getElementById('3PT-home');
    let ftEl = document.getElementById('FT-home');

    ftEl.textContent = `${homeStats[2][0]} - ${homeStats[2][1]}`;
    fgEl.textContent = `${homeStats[0][0]} - ${homeStats[0][1]}`;
    fg3El.textContent = `${homeStats[1][0]} - ${homeStats[1][1]}`;

    let fgpercEl = document.getElementById('FG-prc-home');
    let fg3percEl = document.getElementById('3PT-prc-home');
    let ftpercEl = document.getElementById('FT-prc-home');

    fgpercEl.textContent = `${Math.round(100 * homeStats[0][0] / homeStats[0][1])}%`;
    fg3percEl.textContent = `${Math.round(100 * homeStats[1][0] / homeStats[1][1])}%`;
    ftpercEl.textContent = `${Math.round(100 * homeStats[2][0] / homeStats[2][1])}%`;

}


let homeStats = [
    //FG index 0: made; 1: atempted
    [0,0],
    //3pt index 0: made; 1: atempted
    [0,0],
    //FT index 0: made; 1: atempted
    [0,0]
]
let awayStats = [[0,0],[0,0],[0,0]]

let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementsByClassName("score")[1];
let awayScoreEl = document.getElementsByClassName("score")[0];

// CLock and clock control button functions
let clockEl = document.getElementById("clock");

let totalSeconds = 1200;
let playLive = false;

let min = 20;
let sec = 0;

var gameTimer;

function startTimer() {
    // if clock is not already running, start interval
    if(!playLive){
        gameTimer = setInterval(function () {
            totalSeconds--;
            min = Math.floor(totalSeconds/60)
            sec = Math.floor(totalSeconds%60)
            
            displayTime(min, sec);
        }, 1000)
        playLive = true;
    } else return;
}

function pauseTimer() {
    clearInterval(gameTimer);
    playLive = false;
}

function resetTimer() {
    pauseTimer();
    totalSeconds = 1200;
    min = 20;
    sec = 0;
    displayTime(20, 0);
    playLive = false;
    console.log(totalSeconds);
    console.log(playLive);
}

function displayTime(min, sec) {
    if (sec < 10) {
        clockEl.innerHTML = `${min}:0${sec}`
    }
    else clockEl.innerHTML = `${min}:${sec}`
}

// Toggle possesion arrow
function togglePossession(team) {

    let awayArrow = document.getElementById("left-poss")
    let homeArrow = document.getElementById("right-poss")
    awayArrow.classList.toggle('has-poss')
    homeArrow.classList.toggle('has-poss')

}