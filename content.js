// Function to extract cart data from Amazon
const getAmazonCartData = () => {
    const cartItems = document.querySelectorAll('.sc-list-item');
    let items = [];
    cartItems.forEach(item => {
      items.push({
        name: item.querySelector('.sc-product-title').textContent.trim(),
        price: item.querySelector('.sc-product-price').textContent.trim(),
        quantity: item.querySelector('.sc-quantity-textfield').value
      });
    });
    return items;
  };
  
  // Function to extract cart data from eBay
  const getEbayCartData = () => {
    const cartItems = document.querySelectorAll('.cart-bucket-lineitem');
    let items = [];
    cartItems.forEach(item => {
      items.push({
        name: item.querySelector('.item-title').textContent.trim(),
        price: item.querySelector('.item-price').textContent.trim(),
        quantity: item.querySelector('.qtyInput').value
      });
    });
    return items;
  };
  
  // Function to extract cart data from Walmart
  const getWalmartCartData = () => {
    const cartItems = document.querySelectorAll('.cart-item');
    let items = [];
    cartItems.forEach(item => {
      items.push({
        name: item.querySelector('.product-title-link span').textContent.trim(),
        price: item.querySelector('.price-characteristic').textContent.trim(),
        quantity: item.querySelector('.chooser-option-current').textContent.trim()
      });
    });
    return items;
  };
  
  // Function to determine the current site and extract cart data accordingly
  const getCartData = () => {
    if (window.location.hostname.includes('amazon.com')) {
      return getAmazonCartData();
    } else if (window.location.hostname.includes('ebay.com')) {
      return getEbayCartData();
    } else if (window.location.hostname.includes('walmart.com')) {
      return getWalmartCartData();
    }
    return [];
  };
  
  // Sending cart data to the background script
  chrome.runtime.sendMessage({ type: 'fetch_cart_data', data: getCartData() }, response => {
    console.log(response.data);
  });
  