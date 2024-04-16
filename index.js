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
          isTrue: item["true or false"]
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
  // Shuffle the array to randomize the order of stories
  const shuffledStories = shuffleArray(stories);

  // Get references to left and right story containers
  const leftContainer = document.getElementById("leftContainer");
  const rightContainer = document.getElementById("rightContainer");

  // Filter true and false stories from the shuffled array
  const trueStories = shuffledStories.filter(story => story.isTrue);
  const falseStories = shuffledStories.filter(story => !story.isTrue);

  // Randomly select one true and one false story
  const trueStoryToDisplay = trueStories[Math.floor(Math.random() * trueStories.length)];
  const falseStoryToDisplay = falseStories[Math.floor(Math.random() * falseStories.length)];

  // Display left container
  leftContainer.innerHTML = generateStoryHTML(trueStoryToDisplay);

  // Display right container
  rightContainer.innerHTML = generateStoryHTML(falseStoryToDisplay);

  // Hide the start button
  document.getElementById("startButton").style.display = "none";
    
  // Display the decision buttons
  leftContainer.style.display = "block";
  rightContainer.style.display = "block";

  // Add event listener to story containers
  leftContainer.addEventListener('click', handleStoryClick);
  rightContainer.addEventListener('click', handleStoryClick);
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
function handleStoryClick() {
    // Show the "Try again" button
    document.getElementById("tryAgainButton").style.display = "block";

    // Hide the story containers
    document.getElementById("leftContainer").style.display = "none";
    document.getElementById("rightContainer").style.display = "none";
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
});

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
