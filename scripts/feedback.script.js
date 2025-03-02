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
let currentStep = 0;
const selections = document.querySelectorAll(".forum");
console.log(selections);
console.log("hello world");

function showStep(step) {
  selections.forEach((section, index) => {
    section.classList.toggle("inactive", index !== step);
  });
}

function validateStep() {
  console.log("validating step");
  const currentStep = selections[currentStep];
  const inputs = currentStep.querySelectorAll("input, textarea");
  console.log(inputs);
  for (let i in inputs) {
    if (!i.checkValidity()) {
      i.reportValidity();
      return false;
    }
  }
  return true;
}

if (currentStep === 1) {
  console.log("image changing");
  rightArrowBtn.disabled = true;
  rightArrowImg.src = "../assets/arrow.right.disabled.png";
}

function nextStep() {
  if (currentStep < selections.length - 1) {
    if (validateStep(currentStep)) {
      currentStep++;
      showStep(currentStep);
    }
  }
  if (currentStep === selections.length - 1) {
    rightArrowBtn.disabled = true;
    rightArrowImg.src = "../assets/arrow.right.disabled.png";
  }
  leftArrowBtn.disabled = false;
  leftArrowImg.src = "../assets/arrow.left.png";
}

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

// form.addEventListener("input", () => {
//   console.log("jnbjnl");
//   if (form.checkValidity()) {
//     submitBtn.disabled = false;
//   } else {
//     submitBtn.disabled = true;
//   }
// });

// check this
function downloadJson(data, filename) {
  let jsonString = JSON.stringify(data, null, 2);
  let blob = new Blob([[jsonString], { type: "application/json" }]);
  let a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  document.body.removeChild(a);
}

document
  .getElementById("forum-body")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let jsonData = Object.fromEntries(formData.entries());
    downloadJson(jsonData, `${formId.value}.feedback.json`);
  });

showStep(currentStep);

noRadio.addEventListener("change", function () {
  if (noRadio.checked) {
    sugest.style.display = "inline-flex";
    sugestBox.required = true;
  }
});

yesRadio.addEventListener("change", () => {
  if (yesRadio.checked) {
    sugest.style.display = "none";
  }
});

// form.addEventListener("input", () => {
//   console.log("jnbjnl");
//   if (form.checkValidity()) {
//     submitBtn.disabled = false;
//   } else {
//     submitBtn.disabled = true;
//   }
// });

// Function for dropdown
function dropDownFunc() {
  dropContent.classList.toggle("show");
}

function changeBtnText(text) {
  dropBtn.textContent = text;
  dropContent.classList.toggle("show");
}

window.onclick = (event) => {
  if (!event.target.matches("#dropbtn")) {
    var dropdowns = document.getElementsByClassName("drop-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
// Showing the charater counter in textBox
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
