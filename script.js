// Welcome message when website loads
window.onload = function () {
    alert("Welcome to Gym Fitness! Push Yourself Beyond Limits.");
};

// Join Now button functionality
const joinButton = document.querySelector(".join-btn");

if (joinButton) {
    joinButton.addEventListener("click", function (event) {
        alert("Thank you for choosing Gym Fitness! Redirecting to registration page...");
    });
}

// Contact Form Validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        let inputs = contactForm.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(function (input) {
            if (input.value.trim() === "") {
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault();
            alert("Please fill in all fields before submitting.");
        } else {
            alert("Message sent successfully!");
        }
    });
}

// Service card animation on click
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function (card) {
    card.addEventListener("click", function () {
        alert("Explore this fitness service with Gym Fitness!");
    });
});

// Gallery image click effect
const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        alert("Gym Fitness Gallery Image Selected!");
    });
});
window.onload = function () {
    alert("Welcome to Gym Fitness!");
};
document.querySelector(".join-btn");

document.querySelector(".contact-form");

document.querySelectorAll(".service-card");

document.querySelectorAll(".gallery-item img");

document.querySelectorAll(".testimonial-card");

document.querySelectorAll(".about us-section img");
