// Example of adding a click listener to "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
      alert('Product added to cart!');
    });
  });
  document.querySelectorAll('.footer a').forEach(link => {
    link.addEventListener('click', event => {
      console.log(`Navigating to: ${link.href}`);
    });
  });
  