document.getElementById('orderForm').addEventListener('submit', function (e) {
  const quantity = parseInt(document.getElementById('quantity').value);
  if (quantity <= 0) {
    e.preventDefault();
    alert("Please enter a valid quantity greater than 0.");
  }
});
