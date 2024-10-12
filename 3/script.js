let itemCount = 1;

function addOrderItem() {
    const orderItemsContainer = document.getElementById("order-items");
    const newOrderItem = document.createElement("div");
    newOrderItem.className = "order-item";
    newOrderItem.innerHTML = `
        <label for="product-${itemCount}">Товар:</label>
        <select id="product-${itemCount}">
            <option value="100">Товар 1 - 100p</option>
            <option value="200">Товар 2 - 200p</option>
            <option value="300">Товар 3 - 300p</option>
        </select>
        <label for="quantity-${itemCount}">Количество:</label>
        <input type="number" id="quantity-${itemCount}" min="1" value="1">
    `;
    orderItemsContainer.appendChild(newOrderItem);
    itemCount++;
}

function calculateOrder() {
    let totalPrice = 0;
    for (let i = 0; i < itemCount; i++) {
        const productPrice = parseFloat(document.getElementById(`product-${i}`).value);
        const quantity = parseFloat(document.getElementById(`quantity-${i}`).value);
        totalPrice += productPrice * quantity;
    }
    document.getElementById("result").textContent = `Общая стоимость заказа: ${totalPrice.toFixed(2)}P`;
}
