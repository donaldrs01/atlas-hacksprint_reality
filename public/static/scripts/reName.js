console.log('JS loaded in!')

import { initializeApp } from "firebase/app";
import {
  getFirestore, collection, query, where, getDocs,
  getDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxKUXPlej5myONnx6nah0U5Ffk794adCg",
    authDomain: "reality-check-17ece.firebaseapp.com",
    projectId: "reality-check-17ece",
    storageBucket: "reality-check-17ece.appspot.com",
    messagingSenderId: "693584044894",
    appId: "1:693584044894:web:ceda2d0bc31213b4eae5cf",
    measurementId: "G-HGVPY1BF6R"
  };

//init firebase app with project settings
const firebaseApp = initializeApp(firebaseConfig);
console.log('Firebase initialized!')

//init Firestore database
const db = getFirestore(firebaseApp)
console.log('Database initialized!')


// Function to populate true and false stories
async function decisionButtons() {
  try {
    // Fetch true story from Firestore DB
    const trueStoryQuery = await getDocs(query(collection(db, 'headlines'), where ('real_or_fake', '==', true )));
    const trueStories = [];
    trueStoryQuery.forEach(doc => {
      trueStories.push(doc.data());
    });
    //Fetch fake story from DB
    const falseStoryQuery = await getDocs(query(collection(db, 'headlines'), where ('real_or_fake', '==', false)));
    const falseStories = [];
    falseStoryQuery.forEach(doc => {
      falseStories.push(doc.data());
    });

    // Choose random story from trueStories and falseStories arrays
    const randomTrueStory = trueStories[Math.floor(Math.random() * trueStories.length)];
    const randomFalseStory = falseStories[Math.floor(Math.random() * falseStories.length)];
    
    // Get references to true and false story containers
    const trueStoryContainer = document.getElementById("trueStoryContainer");
    const falseStoryContainer = document.getElementById("falseStoryContainer");
    
    // Display true story container
    trueStoryContainer.innerHTML = generateStoryHTML(randomTrueStory);
    
    // Display false story container
    falseStoryContainer.innerHTML = generateStoryHTML(randomFalseStory);
    
    // Hide the start button
    document.getElementById("startButton").style.display = "none";
    
    // Display the decision buttons
    trueStoryContainer.style.display = "block";
    falseStoryContainer.style.display = "block";
    
    // Add event listener to story containers
    trueStoryContainer.addEventListener('click', handleStoryClick);
    falseStoryContainer.addEventListener('click', handleStoryClick);
} catch (error) {
  console.error('Error fetching stories:', error);
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
  decisionButtons();
  document.getElementById("startButton").style.display = "block";

  // Hide the "Try again" button
  this.style.display = "none";
});
}
