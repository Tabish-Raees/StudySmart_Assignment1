const contactForm = document.querySelector("#contact-form");
const messageField = document.querySelector("#contact-message");
const messageCount = document.querySelector("#message-count");
const formStatus = document.querySelector("#form-status");

function updateMessageCount() {
  messageCount.textContent = `${messageField.value.length} / 500`;
}

function markField(field) {
  const isValid = field.checkValidity();
  field.setAttribute("aria-invalid", String(!isValid));
  return isValid;
}

messageField.addEventListener("input", updateMessageCount);

contactForm.addEventListener("input", (event) => {
  if (event.target.matches("input, textarea, select")) {
    markField(event.target);
    formStatus.textContent = "";
    formStatus.classList.remove("is-error");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = [...contactForm.querySelectorAll("input, textarea, select")];
  const allValid = fields.map(markField).every(Boolean);

  if (allValid) {
    formStatus.textContent = "Everything looks good. This sample form does not send the message.";
    formStatus.classList.remove("is-error");
    return;
  }

  formStatus.textContent = "Please check the highlighted fields and try again.";
  formStatus.classList.add("is-error");
  contactForm.querySelector('[aria-invalid="true"]')?.focus();
});

updateMessageCount();
