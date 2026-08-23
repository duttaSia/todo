document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const feedbackMsg = document.getElementById("formFeedback");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            // Prevent standard page reload behavior
            event.preventDefault();

            // Extract input values
            const name = document.getElementById("userName").value.trim();
            const email = document.getElementById("userEmail").value.trim();

            // Perform localized validation feedback display
            feedbackMsg.style.color = "#34d399"; // UI Success Green
            feedbackMsg.textContent = `Thank you, ${name}! Your request has been recorded.`;

            // Reset inputs
            contactForm.reset();

            // Clear notice text after 4 seconds
            setTimeout(() => {
                feedbackMsg.textContent = "";
            }, 4000);
        });
    }
});
