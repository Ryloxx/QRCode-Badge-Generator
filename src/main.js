const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
const dataEntry = document.getElementById("data-entry");

submitButton.addEventListener("click", (event) => {
  transition(dataEntry, result, 0.5);
});

function transition(before, after, duration) {
  before.style.animation = `fadeOut ${duration}s forwards`;
  setTimeout(() => {
    after.style.display = "initial";
    before.style.display = "none";
    after.style.animation = `fadeIn ${duration}s  forwards`;
  }, duration * 1000);
}
