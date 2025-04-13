let allcart = JSON.parse(localStorage.getItem("hy")) || [];

const showCart = () => {
    let tbl = "";
    let total = 0;
    allcart.forEach((val) => {
        const { id, name, price, qty, image } = val;  
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
        `
    });

    document.getElementById('data').innerHTML = tbl;
    document.getElementById('total').innerHTML = `Rs. ${total}`;
    
};

showCart();

const updateCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    allcart = allcart.map((val) => {
        if (val.id === id) {
            val.qty = parseInt(qty); 
        }
        return val;
    });
    localStorage.setItem('hy', JSON.stringify(allcart));
    alert("Cart updated");
   showCart()
};

const deleteCart = (id) => {
    allcart = allcart.filter((val) => val.id !== id);
    localStorage.setItem('hy', JSON.stringify(allcart));
    alert("Item removed from cart");
    showCart()
};


