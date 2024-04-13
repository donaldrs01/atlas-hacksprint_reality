// Function to populate true and false stories
function decisionButtons() {
  
  
  // Hardcoded story data
  const trueStory = {
      title: "COVID-19 Vaccine Development",
      description: "Scientists have successfully developed a highly effective COVID-19 vaccine with minimal side effects."
  };

  const falseStory = {
      title: "Alien Invasion Confirmed",
      description: "Reports of an alien invasion have been confirmed by government officials."
  };

  // Get references to true and false story containers
  const trueStoryContainer = document.getElementById("trueStoryContainer");
  const falseStoryContainer = document.getElementById("falseStoryContainer");

  // Display true story container
  trueStoryContainer.innerHTML = generateStoryHTML(trueStory);

  // Display false story container
  falseStoryContainer.innerHTML = generateStoryHTML(falseStory);

  // Hide the start button
  document.getElementById("startButton").style.display = "none";
    
  // Display the decision buttons
  trueStoryContainer.style.display = "block";
  falseStoryContainer.style.display = "block";

  // Add event listener to story containers
  trueStoryContainer.addEventListener('click', handleStoryClick);
  falseStoryContainer.addEventListener('click', handleStoryClick);
}

// Function to generate HTML for a story
function generateStoryHTML(story) {
  return `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${story.title}</h5>
              <p class="card-text">${story.description}</p>
          </div>
      </div>
  `;
}

// Function to handle clicks on story containers
function handleStoryClick() {
    // Show the "Try again" button
    document.getElementById("tryAgainButton").style.display = "block";

    // Hide the story containers
    document.getElementById("trueStoryContainer").style.display = "none";
    document.getElementById("falseStoryContainer").style.display = "none";
}

// Event listener for the Start Quiz button
document.getElementById("startButton").addEventListener("click", function() {
  decisionButtons();
});

// Show the start button when the page loads
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("startButton").style.display = "block";
});

// Event listener for the "Try again" button
document.getElementById("tryAgainButton").addEventListener("click", function() {
  // Show the start button
  document.getElementById("startButton").style.display = "block";

  // Hide the "Try again" button
  this.style.display = "none";
});