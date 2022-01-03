// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", (event) => {
  const items = document.getElementsByClassName("like");
  for (let i = 0; i < items.length; i++) {
    const heart = items[i].children[0];
    heart.onclick = function () {
      likeFunction(heart);
    };
  }
});

function likeFunction(heart) {
  mimicServerCall()
    .then((response) => {
      if (heart.classList.contains("activated-heart")) {
        heart.innerHTML = EMPTY_HEART;
        heart.classList.remove("activated-heart");
      } else {
        heart.innerHTML = FULL_HEART;
        heart.classList.add("activated-heart");
      }
    })
    .catch(() => {
      const hidden = document.getElementById("modal");
      hidden.classList.remove("hidden");
      setTimeout(function () {
        addHiddenClassBack(hidden);
      }, 3000);
    })
}

function addHiddenClassBack(element) {
  element.classList.add("hidden");
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
