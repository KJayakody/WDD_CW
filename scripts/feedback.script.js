let currentStep = 0;

const selections = document.querySelectorAll(".forum");
console.log(selections);
console.log("hello world");

function showStep(step) {
  selections.forEach((section, index) => {
    section.classList.toggle("inactive", index === step);
  });
}

function nextStep() {
  if (currentStep < selections.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

document
  .getElementById("forum-body")
  .addEventListener("submit", function (event) {
    alert("Thank you for your feedback!");
    event.preventDefault();
  });

showStep(currentStep + 1);
