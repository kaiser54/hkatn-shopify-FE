const toggleScreenElement = (content, button) => {
  const screenContent = document.getElementById(content);
  const screenButton = document.getElementById(button);

  screenButton.addEventListener("click", () => {
    screenContent.classList.toggle("show_dropdown_content");
  });
};

toggleScreenElement("profileDropdownContent", "profileDropdownBtn"); // this alows me to togggle the store profile content
toggleScreenElement("infoContent", "closeInfoBtn");
