 // Function to toggle answer visibility
 function toggleAnswer(element) {
  const answer = element.querySelector('.answer');
  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      answer.style.height = 'auto';  // Adjust for height transition
      answer.style.transition = 'height 0.3s ease-out';
      element.style.marginBottom = '20px';
  } else {
      answer.style.display = 'none';
      answer.style.height = '0';
      element.style.marginBottom = '15px';
  }
}


// Ensure all answers are hidden initially
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.answer').forEach(answer => {
      answer.style.display = 'none';
      answer.style.height = '0';
  });
});

document.addEventListener('click', function(event) {
  const asideElement = document.querySelector('aside');
  const menuElement = document.querySelector('.menu-icon');
  
  // Check if the aside element is at left: 0px
  const asideStyles = window.getComputedStyle(asideElement);
  if (asideStyles.left === '0px') {
    // Check if the clicked target is not the aside element and not a child of the aside element
    if (!asideElement.contains(event.target) && !menuElement.contains(event.target)) {
      toggleMenu();
    }
  }
});

document.addEventListener('touchstart', function(event) {
  const asideElement = document.querySelector('aside');
  const menuElement = document.querySelector('.menu-icon');

  // Check if the aside element is at left: 0px
  const asideStyles = window.getComputedStyle(asideElement);
  if (asideStyles.left === '0px') {
    // Check if the touched target is not the aside element and not a child of the aside element
    if (!asideElement.contains(event.target) && !menuElement.contains(event.target)) {
      toggleMenu();
    }
  }
});


// Function to toggle the sidebar menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
      sidebar.style.left = '-265px';
  } else {
      sidebar.style.left = '0px';
  }
}

// Function to navigate to a unit page
function navigateToUnit(page, unitName) {
  window.location.href = `${page}?unitName=${encodeURIComponent(unitName)}`;
}

// Function to toggle search bar
function toggleSearch() {
  const searchBar = document.getElementById('search-bar');
  if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'flex';
  } else {
      searchBar.style.display = 'none';
  }
}

// Function to search questions
function searchQuestions() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
      const questionText = question.querySelector('h2').innerText.toLowerCase();
      if (questionText.includes(input)) {
          question.style.display = 'block';
      } else {
          question.style.display = 'none';
      }
  });
}

// header to go selection page

document.getElementById('unit-name').addEventListener('click',()=>
{
  let headerName = document.getElementById('unit-name').textContent;
  navigateToUnit('selection.html',`${headerName}`);
})

// home-icon go to home
document.querySelector('.home-icon').addEventListener('click',()=>
  {
    window.location.href = 'index.html';
  })
  

  document.querySelector('.content').addEventListener('click',()=>
    {
      window.location.href = 'first-page.html';
    })
    