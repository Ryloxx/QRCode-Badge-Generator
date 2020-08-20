import InputValidation from "./inputValidation.js";
const submitButton = document.getElementById("submitButton");
const result = document.getElementById("result");
const dataEntry = document.getElementById("data-entry");
const fields = [];
fields.push(
  InputValidation.fieldFact(
    "firstname",
    "firstname",
    "firstname-error",
    [InputValidation.defaultFormat],
    undefined,
    "Please provide a firstname",
    ""
  )
);
fields.push(
  InputValidation.fieldFact(
    "lastname",
    "lastname",
    "lastname-error",
    [InputValidation.defaultFormat],
    undefined,
    "Please provide a lastname",
    ""
  )
);
fields.push(
  InputValidation.fieldFact(
    "email",
    "email",
    "email-error",
    [InputValidation.emailFormat],
    undefined,
    "Invalid email format",
    ""
  )
);
fields.push(
  InputValidation.fieldFact(
    "twitter",
    "twitter",
    "twitter-error",
    [/.+/],
    [/^@/],
    "Please provide a twitter account",
    "You twitter account must start with the character '@'"
  )
);
fields.push(
  InputValidation.fieldFact(
    "github",
    "github",
    "github-error",
    [InputValidation.defaultFormat],
    undefined,
    "Please provide a github account",
    ""
  )
);

submitButton.addEventListener("click", (event) => {
  if (InputValidation.validateFields(fields)) {
    setTimeout(() => {
      transition(dataEntry, result, 0.5);
    }, 1000);
  }
});

function transition(before, after, duration) {
  before.style.animation = `fadeOut ${duration}s forwards`;
  setTimeout(() => {
    after.style.display = "initial";
    before.style.display = "none";
    after.style.animation = `fadeIn ${duration}s  forwards`;
  }, duration * 1000);
}
