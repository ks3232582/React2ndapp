import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Initial and alternate image sources
const initialPhoto = 'DSC00579.jpg';
const alternatePhoto = '0M4A3098.jpg'; // Replace with your alternate photo

const App = () => {
  // State to manage the current image and text
  const [photo, setPhoto] = useState(initialPhoto);
  const [linkText, setLinkText] = useState('Riya Singh ❤️');
  const [myText, setMyText] = useState('Its me Kundan Singh');

  // Function to change the photo and text
  const handleClick = () => {
    if (photo === initialPhoto) {
      setPhoto(alternatePhoto);
      setLinkText('I Love You Babu!');
      setMyText('She is My World'); // Update text when image changes
    } else {
      setPhoto(initialPhoto);
      setLinkText('Riya Singh ❤️');
      setMyText('Its me Kundan Singh'); // Revert text when image changes back
    }
  };

  // Get current time
  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = '';

  // Set greeting based on time of day (optional)
  if (curDate < 12) {
    greeting = 'Good Morning';
  } else if (curDate < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  const cssStyle = {
    // Add your CSS styles here if needed
  };

  return (
    <div>
      <h1>{myText}<span style={cssStyle}> {greeting} </span></h1>
      <img src={photo} alt="My Photo" style={{ width: '200px', height: 'auto' }} onClick={handleClick} />
      <br />
      <div>
        See My World .. <a href="#" onClick={handleClick}>{linkText}</a>
      </div>
    </div>
  );
};

// Render the component to the DOM
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
