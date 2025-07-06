function showMessageBox(message) {
  const msgBox = document.getElementById("message-box");
  const msgBoxText = document.getElementById("message-box-text");
  const msgBoxOverlay = document.getElementById("message-box-overlay");

  msgBoxText.textContent = message;
  msgBox.style.display = "flex";
  msgBoxOverlay.style.display = "block";

  document.getElementById("message-box-close").onclick = function () {
    msgBox.style.display = "none";
    msgBoxOverlay.style.display = "none";
  };
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-bar");
  skillBars.forEach((bar) => {
    const level = bar.dataset.level;
    bar.style.width = "0%";
    setTimeout(() => {
      bar.style.width = `${level}%`;
    }, 100);
  });
}

function animateCvItems() {
  const cvItems = document.querySelectorAll(".cv-item");
  cvItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
    item.style.animationPlayState = "running";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const homePage = document.getElementById("home-page");
  const aboutPage = document.getElementById("about-page");
  const projectsPage = document.getElementById("projects-page");
  const contactPage = document.getElementById("contact-page");
  const contactForm = document.getElementById("contact-form");
  const contactHomeBtn = document.getElementById("contact-home-btn");
  const viewProjectsHomeBtn = document.getElementById("view-projects-home-btn");
  const contactProjectsBtn = document.getElementById("contact-projects-btn");

  function showPage(pageId) {
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active");
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add("active");
      if (pageId === "about-page") {
        animateSkillBars();
        animateCvItems();
      }
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.page === pageId.replace("-page", "")) {
        link.classList.add("active");
      }
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageName = e.target.dataset.page;
      showPage(`${pageName}-page`);
    });
  });

  if (contactHomeBtn) {
    contactHomeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("contact-page");
    });
  }

  if (viewProjectsHomeBtn) {
    viewProjectsHomeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("projects-page");
    });
  }

  if (contactProjectsBtn) {
    contactProjectsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      showPage("contact-page");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showMessageBox(
        "Thank you for your message! I will get back to you soon."
      );
      contactForm.reset();
    });
  }

  showPage("home-page");
});
