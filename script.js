
const themeBtn = document.getElementById('theme-btn');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.projects-contact section, .about-section, .skills-section');
const projectsContactSection = document.getElementById('projects-contact');
const profilePic = document.getElementById('profile-pic');
const skillsPic = document.getElementById('skills-pic');
const cloud = document.querySelectorAll('.cloud');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const submitBtn = document.getElementById('submit-btn');
const popup = document.getElementById('popup');
const popupCloseBtn = document.getElementById('popup-close-btn');

// Toggle the theme of the website when the theme button is clicked
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});

// Add event listeners to the navigation links
navLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    const targetId = link.dataset.target;
    
    // Remove the 'active' class from all sections
    sections.forEach(section => {
      section.classList.remove('active');
    });
    
    // If the target is 'projects', 'contact', or 'skills', scroll to the projects-contact section and add the 'active' class to the corresponding section
    if (targetId === 'projects' || targetId === 'contact' || targetId === 'skills') {
      const targetSection = document.getElementById(targetId);
      projectsContactSection.scrollIntoView({ behavior: 'smooth' });
      targetSection.classList.add('active');
    } 
    // Otherwise, scroll to the target section and add the 'active' class to it
    else {
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
      targetSection.classList.add('active');
    }
  });
});

// Add event listeners to the profile picture and skills picture to show the 'Hi!' cloud
profilePic.addEventListener('click', () => {
  cloud[0].classList.add('active');
  
  setTimeout(() => {
    cloud[0].classList.remove('active');
  }, 1000);
});

skillsPic.addEventListener('click', () => {
  cloud[1].classList.add('active');
  
  setTimeout(() => {
    cloud[1].classList.remove('active');
  }, 1000);
});

// Add event listener to the submit button to validate the form and submit it
submitBtn.addEventListener('click', () => {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  
  // If all fields are filled, clear the input fields and reload the page
  if (nameValue && emailValue && messageValue) {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    window.location.replace(window.location.href);
  } 
  // Otherwise, show the popup
  else {
    popup.classList.add('active');
  }
});

// Add event listener to the popup close button to hide the popup
popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});