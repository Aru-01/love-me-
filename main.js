const noBtn = document.querySelector("[data-btn]");
const yesBtn = document.querySelector("[data-y-btn]");

// Function to get random top position within window limits
const topPosition = () => {
  const buttonHeight = noBtn.offsetHeight;
  const maxTop = window.innerHeight - buttonHeight; // Ensure it stays within the screen height
  const random = Math.random() * maxTop;
  return random;
};

// Function to get random left position within window limits
const leftPosition = () => {
  const buttonWidth = noBtn.offsetWidth;
  const maxLeft = window.innerWidth - buttonWidth; // Ensure it stays within the screen width
  const random = Math.random() * maxLeft;
  return random;
};

// Function to move the "Nope" button when hovered or tapped/clicked
const moveNoBtn = () => {
  const positionY = topPosition(); // Get a new random Y position
  const positionX = leftPosition(); // Get a new random X position

  // Move button within visible area, without overlaying screen edges
  noBtn.style.position = "absolute"; // Ensure it's positioned absolutely
  noBtn.style.top = `${positionY}px`;
  noBtn.style.left = `${positionX}px`;

  noBtn.id = noBtn.id == 0 ? 1 : 0;
};

// Apply the same "move away" behavior for both mouse and touch interactions
noBtn.addEventListener("mouseover", moveNoBtn); // For desktop hover
noBtn.addEventListener("touchstart", moveNoBtn); // For mobile touch (move before user clicks)

// Handle 'Yeah' button click (popup generation)
yesBtn.addEventListener("click", () => {
  setInterval(() => {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "Love You too ...🫶";

    // Set popup styling (ensuring it stays within screen bounds)
    const popupWidth = 250; // Fixed width for the popup
    const popupHeight = 50; // Fixed height for the popup
    const maxLimitY = window.innerHeight - popupHeight;
    const maxLimitX = window.innerWidth - popupWidth;

    popup.style.position = "absolute";
    popup.style.width = popupWidth + "px";
    popup.style.height = popupHeight + "px";
    popup.style.top = Math.random() * maxLimitY + "px";
    popup.style.left = Math.random() * maxLimitX + "px";

    document.body.appendChild(popup);
  }, 300); // Infinite interval for popups
});
