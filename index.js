homeEl = document.getElementById("home-score");
guestEl = document.getElementById("guest-score");
let countHome = 0;
let countGuest = 0;

function incrementHomeOne() {
  countHome = countHome + 1;
  homeEl.textContent = countHome;
}

function incrementHomeTwo() {
  countHome = countHome + 2;
  homeEl.textContent = countHome;
}

function incrementHomeThree() {
  countHome = countHome + 3;
  homeEl.textContent = countHome;
}

function incrementGuestOne() {
  countGuest = countGuest + 1;
  guestEl.textContent = countGuest;
}

function incrementGuestTwo() {
  countGuest = countGuest + 2;
  guestEl.textContent = countGuest;
}

function incrementGuestThree() {
  countGuest = countGuest + 3;
  guestEl.textContent = countGuest;
}

function resetHome() {
  homeEl.textContent = 0;
  countHome = 0;
}

function resetGuest() {
  guestEl.textContent = 0;
  countGuest = 0;
}

function newGame() {
  homeEl.textContent = 0;
  countHome = 0;
  guestEl.textContent = 0;
  countGuest = 0;
}
