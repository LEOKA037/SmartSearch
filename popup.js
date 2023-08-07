document.addEventListener('DOMContentLoaded', function() {
  fetch('config.json')
    .then(response => response.json())
    .then(data => {
      document.title = data.header || 'ChatGPT Search';
      document.getElementById('header').innerText = data.header || 'ChatGPT Search';
      document.getElementById('body').innerText = data.body || 'This is the body of the popup.';
      document.getElementById('searchInput').placeholder = data.placeholder || 'Enter your search query';
      document.getElementById('searchButton').innerText = data.buttonText || 'Search';
    })
    .catch(err => {
      console.error('Error reading config.json:', err);
    });

  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  function performSearch() {
    const searchQuery = searchInput.value.trim();
    if (searchQuery !== '') {
      // Perform the search action here
      // You can use APIs to send the search query to ChatGPT backend
      // For simplicity, let's just display an alert
      alert('You searched: ' + searchQuery);
    }
  }

  searchButton.addEventListener('click', function() {
    performSearch();
  });

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});
