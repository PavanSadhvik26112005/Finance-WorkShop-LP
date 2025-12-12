// ===== SELECTORS =====
const ctaBtns = document.querySelectorAll(".cta-btn");
const leadModal = document.getElementById("leadModal");
const thankYouPopUp = document.getElementById("thankYouPopUp");
const closeThankYou = document.getElementById("closeThankYou");

// ===== OPEN MODAL WHENEVER A CTA BUTTON IS CLICKED =====
ctaBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    leadModal.style.display = "flex";
  });
});

// ===== CLOSE MODAL FUNCTION =====
function closeModal() {
  leadModal.style.display = "none";
}

// ===== FORM SUBMISSION HANDLING =====
document.getElementById("leadForm").addEventListener("submit", async function (e) {
  e.preventDefault();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwsMYs7PzTGWZszOus9EszIlNowJklo0r35BiiAyjwssjR6RjPZmWiB8V94kHLlxr1C/exec",
        {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone }),
        }
    );


    
closeModal();
  thankYouPopUp.style.display = "flex";
});

// ===== CLOSE THANK YOU POPUP =====
closeThankYou.addEventListener("click", () => {
  thankYouPopUp.style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
});
