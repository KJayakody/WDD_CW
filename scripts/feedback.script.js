const sugest = document.getElementById("sugestionId");
const sugestBox = document.getElementById("sugestion-box");
const yesRadio = document.getElementById("yes-radio");
const noRadio = document.getElementById("no-radio");
const leftArrowBtn = document.querySelector(".arrow.left");
const leftArrowImg = document.getElementById("arrow-left-img");
const rightArrowImg = document.getElementById("arrow-right-img");
const rightArrowBtn = document.querySelector(".arrow.right");
const submitBtn = document.getElementById("submit-btn");
const form = document.getElementById("forum-body");
const formId = document.getElementById("fname");
const dropBtn = document.getElementById("dropbtn");
const dropContent = document.getElementById("dropContent");
const ratingInput = document.getElementById("rating");
const ratingOutput = document.getElementById("output");
const selections = document.querySelectorAll(".forum");

// counter for the steps
var currentStep = 0;

// function to show the current step
function showStep(step) {
  selections.forEach((section, index) => {
    section.classList.toggle("inactive", index !== step);
  });
}

// function to validate the current step
function validateStep() {
  // console.log("validating step");
  const currentSection = selections[currentStep];
  const inputs = currentSection.querySelectorAll("input, textarea");
  // console.log(inputs);

  // check if all inputs are valid
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      inputs[i].reportValidity();
      return false;
    }
  }
  return true;
}

// disable the left arrow button if the current step is 0
if (currentStep === 1) {
  // console.log("image changing");
  rightArrowBtn.disabled = true;
  rightArrowImg.src = "../assets/arrow.right.disabled.png";
}

// event listener for the right arrow button
function nextStep() {
  if (currentStep < selections.length - 1) {
    if (validateStep()) {
      currentStep++;
      showStep(currentStep);
    }
  }

  // disable the right arrow button if the current step is the last step
  if (currentStep === selections.length - 1) {
    rightArrowBtn.disabled = true;
    rightArrowImg.src = "../assets/arrow.right.disabled.png";
  } else {
    rightArrowBtn.disabled = false;
    rightArrowImg.src = "../assets/arrow.right.png";
  }

  leftArrowBtn.disabled = currentStep === 0;
  // ternary operator to change the image of the left arrow button
  leftArrowImg.src =
    currentStep === 0
      ? "../assets/arrow.left.disabled.png"
      : "../assets/arrow.left.png";
}

// event listener for the left arrow button
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
  if (currentStep === 0) {
    leftArrowBtn.disabled = true;
    leftArrowImg.src = "../assets/arrow.left.disabled.png";
  }
  rightArrowBtn.disabled = false;
  rightArrowImg.src = "../assets/arrow.right.png";
}

// Download the json file of the feedback form - Ai code for simulating the form submission
function downloadJson(data, filename) {
  let jsonString = JSON.stringify(data, null, 2);
  let blob = new Blob([[jsonString], { type: "application/json" }]);
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
}

// event listener for the form submission
document
  .getElementById("forum-body")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let jsonData = Object.fromEntries(formData.entries());
    downloadJson(jsonData, `${formId.value}.feedback.json`);
  });

showStep(currentStep);

// display the suggestions box when the no radio button is checked
noRadio.addEventListener("change", function () {
  if (noRadio.checked) {
    sugest.style.display = "inline-flex";
    sugestBox.required = true;
  }
});

// hide the suggestions box when the yes radio button is checked
yesRadio.addEventListener("change", () => {
  if (yesRadio.checked) {
    sugest.style.display = "none";
    sugestBox.required = false;
  }
});

// Showing the charater counter in suggestion textBox
function updateCounter() {
  const counter = document.getElementById("counter");
  const textBox = document.getElementById("sugestion-box");

  counter.textContent = `${textBox.value.length}/${textBox.maxLength}`;
}

document.addEventListener("DOMContentLoaded", updateCounter);

// for rating range.
document.addEventListener("input", () => {
  ratingOutput.textContent = ratingInput.value;
});
