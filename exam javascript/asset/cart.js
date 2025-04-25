let allcart = JSON.parse(localStorage.getItem("user")) || [];

const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filterCategory");
const sortSelect = document.getElementById("sortPrice");


const showCart = () => {
  let filtered = [...allcart];

  
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(item => item.name.toLowerCase().includes(searchTerm));
  }

  
  const selectedCategory = filterSelect.value;
  if (selectedCategory) {
    filtered = filtered.filter(item => item.category === selectedCategory);
  }

  
  const sortValue = sortSelect.value;
  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price); 
  } else if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price); 
  }

 
  let tbl = "";
  let total = 0;

  filtered.forEach(({ id, name, price, qty, image }) => {
    total += price * qty;
    tbl += `
      <tr>
        <td class="d-flex align-items-center gap-2">
          <img src="${image}" class="product-img" alt="">
          <span>${name}</span>
        </td>
        <td>Rs. ${price}</td>
        <td>
          <input onchange="updateCart(${id})" id="qty_${id}" type="number" class="form-control form-control-sm qty-input mx-auto" value="${qty}" min="1">
        </td>
        <td>Rs. ${price * qty}</td>
        <td>
          <button onclick="deleteCart(${id})" class="btn btn-danger btn-sm rounded">Remove</button>
        </td>
      </tr>
    `;
  });

  document.getElementById('data').innerHTML = tbl;
  document.getElementById('total').innerHTML = `Rs. ${total}`;
};


const updateCart = (id) => {
  const qty = parseInt(document.getElementById(`qty_${id}`).value);
  allcart = allcart.map(item => {
    if (item.id === id) {
      item.qty = qty;
    }
    return item;
  });

  localStorage.setItem('user', JSON.stringify(allcart));
  alert("Cart updated");
  showCart();
};

const deleteCart = (id) => {
  allcart = allcart.filter(item => item.id !== id);
  localStorage.setItem('user', JSON.stringify(allcart));
  alert("Item removed from cart");
  showCart(); 
};


searchInput.addEventListener('input', showCart);
filterSelect.addEventListener('change', showCart);
sortSelect.addEventListener('change', showCart);


showCart();
