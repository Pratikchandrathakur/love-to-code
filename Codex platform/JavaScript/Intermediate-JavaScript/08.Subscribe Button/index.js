const subscribeBtn = document.getElementById("subscribeBtn");
const message = document.getElementById("message");

subscribeBtn.addEventListener("click", () => {
  subscribeBtn.innerText = "Subscribed";
  message.classList.remove("hidden");

  // Hide the message again after 3 seconds (3000 milliseconds)
  setTimeout(() => {
    message.classList.add("hidden");
  }, 3000);
});
