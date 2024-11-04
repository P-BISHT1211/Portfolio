const serviceID = 'service_hxiokbe'; // Replace with your EmailJS service ID
const templateID = 'template_6vl5kil'; // Replace with your EmailJS template ID

// Initialize EmailJS with your user ID (from EmailJS dashboard)
(function () {
  emailjs.init('KmVKHM7_X4sLAd1uc');
})();

function SendMail(event) {
  // Prevent the form from reloading the page
  event.preventDefault();

  // Collect form values
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  // Send the email using EmailJS
  emailjs.send(serviceID, templateID, params)
    .then(function (response) {
      alert('SUCCESS! Email sent.');
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      alert('FAILED! Email not sent.');
      console.log('FAILED...', error);
    });
}

// Add an event listener to the form submit
document.getElementById('contact-form').addEventListener('submit', SendMail);


document.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  
  // Check if the page is scrolled from the top
  if (window.scrollY > 0) {
      header.classList.add("scrolled");  // Add class when scrolling
  } else {
      header.classList.remove("scrolled");  // Remove class when at the top
  }
});

  
// emailjs setup link = https://www.youtube.com/watch?v=BgVjild0C9A


  // Menu changing 


  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menubar");
    const closeIcon = document.getElementById("closeicon");
    const menu = document.querySelector(".menu");
    const navShow = document.querySelector(".menu");

    var isMenuOpen = false;

    menuIcon.addEventListener("click", function () {
        closeIcon.style.display = 'block';
        navShow.style.display = 'flex';
        navShow.classList.add('flex-animation');
        menu.classList.add("nav");
        closeIcon.classList.add('active');
        menuIcon.style.display = 'none';
        navShow.classList.remove('hide-animation');
        isMenuOpen = true;
    });

    closeIcon.addEventListener("click", function () {
        closeMenu();
    });

    // Function to close the menu
    function closeMenu() {
        navShow.style.display = 'none';
        navShow.classList.remove('flex-animation');
        navShow.classList.add('hide-animation');
        closeIcon.style.display = 'none';
        menuIcon.classList.add('active');
        menuIcon.style.display = 'block';
        menu.classList.remove("nav");
        isMenuOpen = false;
    }

    // Close the menu when clicking outside
    document.addEventListener("click", function (event) {
        if (isMenuOpen && !menu.contains(event.target) && event.target !== menuIcon) {
            closeMenu(); // Call the closeMenu function
        }
    });
});


var dark = false; // Initial state

let modesetter = document.querySelector('.Modesetter');
let body = document.body; // Select the body element

modesetter.addEventListener('click', function() {
  dark = !dark; // Toggle the dark variable
  
  if (dark) {
    body.setAttribute('mode', 'dark'); // Set mode to dark
    modesetter.innerHTML = `<i id="mode" class="ri-sun-fill"></i>`; // Change icon to sun
  } else {
    body.setAttribute('mode', 'light'); // Set mode to light
    modesetter.innerHTML = `<i id="mode" class="ri-moon-fill"></i>`; // Change icon to moon
  }
});

// Initialize the mode based on the initial state
if (dark) {
  body.setAttribute('mode', 'dark');
  modesetter.innerHTML = `<i id="mode" class="ri-sun-fill"></i>`;
} else {
  body.setAttribute('mode', 'light');
  modesetter.innerHTML = `<i id="mode" class="ri-moon-fill"></i>`;
}



document.querySelectorAll('.card').forEach(card => {
    const video = card.querySelector('video');

    // Play the video on hover
    card.addEventListener('mouseenter', () => {
        video.play();
    });

    // Pause the video when mouse leaves
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // Reset to the beginning of the video
    });
});
