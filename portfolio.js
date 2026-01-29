function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: "smooth"
    });
}

function showMessage() {
    alert("Thank you for reaching out! I will contact you soon.");
}
