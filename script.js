function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Software Engineer", "Full Stack Developer", "Web Developer"];
  const roleElement = document.getElementById("role");
  let currentRole = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeRoles() {
    const current = roles[currentRole];
    const updatedText = isDeleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);
    roleElement.textContent = updatedText;

    if (!isDeleting && charIndex === current.length) {
      // Finish typing
      setTimeout(() => {
        isDeleting = true;
      }, 500); // Wait half a second after finishing typing
    } else if (isDeleting && charIndex === 0) {
      // Complete deleting
      isDeleting = false;
      currentRole = (currentRole + 1) % roles.length;
    }

    const typingSpeed = isDeleting ? 50 : 100; // Typing speed for deleting and typing respectively
    setTimeout(typeRoles, typingSpeed);
  }

  setTimeout(typeRoles, 1000); // Initial delay before typing starts
});
