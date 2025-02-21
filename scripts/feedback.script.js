let currentStep = 0;
const sugest = document.getElementById("sugestionId");
const yesRadio = document.getElementById("yes-radio");
const noRadio = document.getElementById("no-radio");
const leftArrowBtn = document.querySelector(".arrow.left");
const leftArrowImg = document.getElementById("arrow-left-img");
const rightArrowImg = document.getElementById("arrow-right-img");
console.log("🚀 ~ rightArrowImg:", rightArrowImg);
const rightArrowBtn = document.querySelector(".arrow.right");
console.log("🚀 ~ rightArrowBtn:", rightArrowBtn);
const submitBtn = document.getElementById("submit-btn");

const selections = document.querySelectorAll(".forum");
console.log(selections);
console.log("hello world");

function showStep(step) {
  selections.forEach((section, index) => {
    section.classList.toggle("inactive", index !== step);
  });
}

if (currentStep === 1) {
  console.log("image changing");
  rightArrowBtn.disabled = true;
  rightArrowImg.src = "../assests/arrow.right.disabled.png";
}

function nextStep() {
  if (currentStep < selections.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
  if (currentStep === selections.length - 1) {
    rightArrowBtn.disabled = true;
    rightArrowImg.src = "../assests/arrow.right.disabled.png";

    leftArrowBtn.disabled = false;
    leftArrowImg.src = "../assests/arrow.left.png";
  }
  console.log(currentStep);
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
  if (currentStep === 0) {
    leftArrowBtn.disabled = true;
    leftArrowImg.src = "../assests/arrow.left.disabled.png";

    rightArrowBtn.disabled = false;
    rightArrowImg.src = "../assests/arrow.right.png";
  }
  console.log(currentStep);
}

document
  .getElementById("forum-body")
  .addEventListener("submit", function (event) {
    alert("Thank you for your feedback!");
    event.preventDefault();
  });

showStep(currentStep);

noRadio.addEventListener("change", function () {
  if (noRadio.checked) {
    sugest.style.display = "inline-flex";
  }
});

yesRadio.addEventListener("change", () => {
  if (yesRadio.checked) {
    sugest.style.display = "none";
  }
});
