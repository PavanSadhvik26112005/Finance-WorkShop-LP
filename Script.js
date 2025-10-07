
const ctaBtns = document.querySelectorAll(".cta-btn");
const formContainer = document.getElementById("formContainer");
const overlay = document.getElementById("overlay");
const thankYouPopUp = document.getElementById("thankYouPopUp");
const closeForm = document.getElementById("closeForm");
const closeThankYou = document.getElementById("closeThankYou");

ctaBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formContainer.style.display = "block";
        overlay.style.display = "block";
    });
});


overlay.addEventListener("click", () => {
    formContainer.style.display = "none";
    overlay.style.display = "none";
});


closeForm.addEventListener("click", () => {
    formContainer.style.display = "none";
    overlay.style.display = "none";
    thankYouPopUp.style.display = "flex";
});


closeThankYou.addEventListener("click", () => {
    thankYouPopUp.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
});
