const apiKey = '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';

function performSearch() {
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    fetch('https://api.openai.com/v1/engines/curie/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: searchQuery,
        max_tokens: 100,
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Process the API response and show the results in the popup
      const result = data.choices[0].text;
      alert(result); // For simplicity, display the result in an alert
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error occurred while performing the search.'+error);
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  fetch('config.json')
    .then(response => response.json())
    .then(data => {
      document.title = data.header || 'ChatGPT Search';
      document.getElementById('header').innerText = data.header || 'ChatGPT Search';
      document.getElementById('body').innerText = data.body || 'This is the body of the popup.';
    })
    .catch(err => {
      console.error('Error reading config.json:', err);
    });

  const searchButton = document.getElementById('searchButton');
  const searchInput = document.getElementById('searchInput');

  searchButton.addEventListener('click', function() {
    performSearch();
  });

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      performSearch();
    }
  });
});
