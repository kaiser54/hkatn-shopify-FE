

document.addEventListener("DOMContentLoaded", function () {
    const toggleScreenElement = (content, button) => {
        const screenContent = document.getElementById(content);
        const screenButton = document.getElementById(button);
      
        screenButton.addEventListener("click", () => {
          screenContent.classList.toggle("show_dropdown_content");
        });
      };
      
      toggleScreenElement("notifyDropdownContent", "notifyDropdownBtn"); // this alows me to togggle the store profile content
      toggleScreenElement("profileDropdownContent", "profileDropdownBtn"); // this alows me to togggle the store profile content
      toggleScreenElement("infoContent", "closeInfoBtn"); // this alows me to remove the select plan alert
      toggleScreenElement("infoContent", "closeInfoBtn2"); // this alows me to remove the select plan alert


      
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const panel = this.nextElementSibling;

      // Toggle the active class for the panel
      panel.classList.toggle("active");

      // Toggle aria-expanded attribute
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);

      // Hide other panels
      accordionHeaders.forEach((otherHeader) => {
        if (otherHeader !== header) {
          otherHeader.setAttribute("aria-expanded", "false");
          otherHeader.nextElementSibling.classList.remove("active");
        }
      });
    });

    // Enable keyboard navigation
    header.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.click();
      }
    });
  });
});
