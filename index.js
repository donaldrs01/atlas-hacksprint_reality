// Define an empty array to store the stories
let stories = [];

// Function to fetch JSON data and populate the stories array
function fetchStories() {
  fetch('news.json')
    .then(response => response.json())
    .then(data => {
      // Iterate through the data and push each story to the stories array
      data.forEach(item => {
        const story = {
          title: item.headline,
          isTrue: item["true or false"],
          source: item.source
        };
        stories.push(story);
      });

      // Once the stories array is populated, you can call the decisionButtons function
      decisionButtons();
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

// Function to populate true and false stories
function decisionButtons() {
  // Separate true and false stories into two arrays 
  const trueStories = stories.filter(story => story.isTrue);
  const falseStories = stories.filter(story => story.isTrue === false);

  // Shuffle the array to randomize the order of stories
  const shuffledTrueStories = shuffleArray(trueStories);
  const shuffledFalseStories = shuffleArray(falseStories);

  // Get references to true and false story containers
  const leftContainer = document.getElementById("leftContainer");
  const rightContainer = document.getElementById("rightContainer");

  // Randomly decide which story to display
  const trueStoryToDisplay = shuffledTrueStories[Math.floor(Math.random() * shuffledTrueStories.length)];
  const falseStoryToDisplay = shuffledFalseStories[Math.floor(Math.random() * shuffledFalseStories.length)];

  // Display true story container
  leftContainer.innerHTML = generateStoryHTML(trueStoryToDisplay);

  // Display false story container
  rightContainer.innerHTML = generateStoryHTML(falseStoryToDisplay);

  // Hide the start button
  document.getElementById("startButton").style.display = "none";
    
  // Display the decision buttons
  leftContainer.style.display = "block";
  rightContainer.style.display = "block";

  // Display header prompt
  const header = document.getElementById("mainHeader");
  header.style.display = "block";

  // Add event listener to story containers
  leftContainer.addEventListener('click', function() {
    handleStoryClick(trueStoryToDisplay.isTrue, trueStoryToDisplay);
  });
  rightContainer.addEventListener('click', function() {
    handleStoryClick(falseStoryToDisplay.isTrue, falseStoryToDisplay);
  });

}

// Function to generate HTML for a story
function generateStoryHTML(story) {
  return `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${story.title}</h5>
          </div>
      </div>
  `;
}

// Function to handle clicks on story containers
function handleStoryClick(isTrue, story) {
    // Show the "Try again" button
    const tryAgainButton = document.getElementById("tryAgainButton");
    tryAgainButton.style.display = "block";

    // Display message container
    const messageContainer = document.getElementById("messageContainer");
    const messageText = isTrue ? "Correct!" : "Incorrect!";
    const sourceText = story.source ? `This headline came from ${story.source}` : "";
    document.getElementById("messageText").textContent = messageText;
    document.getElementById("sourceText").textContent = sourceText;
    messageContainer.style.display = "block";

    // Hide the story containers
    const leftContainer = document.getElementById("leftContainer");
    const rightContainer = document.getElementById("rightContainer");
    leftContainer.style.display = "none";
    rightContainer.style.display = "none";

    // Hide the header
    // const header = document.getElementById("mainHeader");
    // header.style.display = "none";
}

// Event listener for the Start Quiz button
document.getElementById("startButton").addEventListener("click", function() {
  fetchStories();
});

// Event listener for the "Try again" button
document.getElementById("tryAgainButton").addEventListener("click", function() {
  // Show the start button
  document.getElementById("startButton").style.display = "block";

  // Hide the "Try again" button
  this.style.display = "none";

  // Hide the message container
  const messageContainer = document.getElementById("messageContainer");
  messageContainer.style.display = "none";
});

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
