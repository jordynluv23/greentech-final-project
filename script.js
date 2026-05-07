const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const newsletterForm = document.querySelector("#newsletterForm");
const newsletterMessage = document.querySelector("#newsletterMessage");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterMessage.textContent = "Thanks for signing up. You are now on the GreenTech update list.";
    newsletterForm.reset();
  });
}

const searchInput = document.querySelector("#productSearch");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.querySelector("#noResults");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    let amountShowing = 0;

    productCards.forEach((card) => {
      const cardWords = card.dataset.name.toLowerCase() + " " + card.textContent.toLowerCase();

      if (cardWords.includes(searchTerm)) {
        card.style.display = "block";
        amountShowing++;
      } else {
        card.style.display = "none";
      }
    });

    noResults.hidden = amountShowing !== 0;
  });
}

const greenTips = [
  "Turn off lights and electronics when they are not being used.",
  "Use recycling signs that are clear and easy for everyone to understand.",
  "Track energy use each month so changes are easier to see.",
  "Switching to LED lights is a simple way to lower energy use."
];

const tipButton = document.querySelector("#tipButton");
const greenTip = document.querySelector("#greenTip");

if (tipButton) {
  tipButton.addEventListener("click", () => {
    const tipNumber = Math.floor(Math.random() * greenTips.length);
    greenTip.textContent = greenTips[tipNumber];
  });
}

const contactForm = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !service || !message) {
      formMessage.textContent = "Please fill out every part of the form before sending it.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      formMessage.textContent = "Please enter an email address that looks correct.";
      return;
    }

    formMessage.textContent = "Your message is ready. Thank you for reaching out to GreenTech Solutions.";
    contactForm.reset();
  });
}