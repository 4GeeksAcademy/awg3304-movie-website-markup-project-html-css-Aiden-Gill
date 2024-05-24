document.getElementById('fetch-cart').addEventListener('click', () => {
    // Send a message to fetch cart data
    chrome.runtime.sendMessage({ type: 'fetch_cart_data' }, response => {
      // Display the fetched cart data in the popup
      const cartContent = document.getElementById('cart-content');
      cartContent.innerHTML = JSON.stringify(response.data, null, 2);
    });
  });
  