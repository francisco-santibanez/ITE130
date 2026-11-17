// Uppdaterar checklistans framsteg när en uppgift markeras eller avmarkeras.
const checklist = document.querySelectorAll(".check-input");
const progressBar = document.querySelector("#progress-bar");
const progressTrack = document.querySelector(".progress");
const progressLabel = document.querySelector("#progress-label");
const checklistMessage = document.querySelector("#checklist-message");

function updateProgress() {
  const completed = document.querySelectorAll(".check-input:checked").length;
  const total = checklist.length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", percentage);
  progressLabel.textContent = `${completed} av ${total} klara`;
  checklistMessage.textContent = completed === total
    ? "Alla stegen avklarade. Bra jobbat!"
    : "Små framsteg räknas också.";
}

checklist.forEach((item) => item.addEventListener("change", updateProgress));
