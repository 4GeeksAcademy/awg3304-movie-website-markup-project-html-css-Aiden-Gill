// Listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log('UniversalCart extension installed.');
  });
  
  // Listener for messages from content scripts or popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'fetch_cart_data') {
      // Placeholder logic for fetching cart data
      // You can add more logic here to handle different types of messages
      sendResponse({ data: 'Cart data fetched' });
    }
  });
  