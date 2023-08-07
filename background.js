chrome.action.onClicked.addListener(function (tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const searchInput = document.getElementById('searchInput').value;
      if (searchInput.trim() !== '') {
        // Perform the search action here
        // You can use APIs to send the search query to ChatGPT backend
        // For simplicity, let's just display an alert
        alert('You searched: ' + searchInput);
      }
    },
  });
});
