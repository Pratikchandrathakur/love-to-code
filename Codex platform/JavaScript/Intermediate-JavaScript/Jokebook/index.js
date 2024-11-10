const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

function fetchJoke() {
  // Fetch for joke data and use chaining here 💖
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      jokeContainer.innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch((error) => console.error('Error fetching joke:', error));
}

getJokeBtn.addEventListener("click", fetchJoke);

