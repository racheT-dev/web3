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
        const quantity = document.getElementById(`quantity-${i}`).value;
        let f=0;
        let regexp = /[1-9][0-9]*/;
        if (quantity.match(regexp)[0] != quantity) { alert("Ошибка ввода: некорректные данные"); break; f=1;}
        totalPrice += productPrice * parseFloat(quantity);
    }
    if (f!=1) document.getElementById("order-result").textContent = `Общая стоимость заказа: ${totalPrice.toFixed(2)}р`;
}

function calculateService() {
    const quantity = document.getElementById("service-quantity").value;
    const serviceType = parseFloat(document.querySelector('input[name="service-type"]:checked').value);
    const serviceOption = parseFloat(document.getElementById("service-option").value);
    const serviceExtra = document.getElementById("service-extra").checked ? 100 : 0;
    let regexp = /[1-9][0-9]*/;
    if (quantity.match(regexp)[0] != quantity) alert("Ошибка ввода: некорректные данные");
    else {
        const totalPrice = parseFloat(quantity) * (serviceType + serviceOption + serviceExtra);
        document.getElementById("service-result").textContent = `Общая стоимость услуги: ${totalPrice.toFixed(2)}р`;
    }
}
