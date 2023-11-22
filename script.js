let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

// Функиця Бюджета
totalAmountButton.addEventListener("click", () => {
    tempAmount = totalAmount.value;
    if (tempAmount === "" || tempAmount < 0) {
    } else {
        amount.innerHTML = tempAmount;
        balanceValue.innerText = tempAmount - expenditureValue.innerText;
        totalAmount.value = "";
    }
});
// Функция Добавление товара
checkAmountButton.addEventListener("click", () => {
    if (!userAmount.value || !productTitle.value) {
        alert('Заполните все поля!')
        return false;
    }
    let expenditure = parseInt(userAmount.value);
    let sum = parseInt(expenditureValue.innerText) + expenditure;
    expenditureValue.innerText = sum;
    const totalBalance = tempAmount - sum;
    balanceValue.innerText = totalBalance;
    listCreator(productTitle.value, userAmount.value);
    productTitle.value = "";
    userAmount.value = "";
});


// Создние Листа
const listCreator = (expenseName, expenseValue) => {
    let subListContent = document.createElement("div");
    subListContent.classList.add("sublist-content", "flex-space");
    subListContent.innerHTML = `<p class="product">${expenseName}</p><p class="amount">${expenseValue}</p>`;
    // Создание кнопки 'Удалить'
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete");
    deleteButton.style.fontSize = "1.2em";
    deleteButton.style.marginLeft = '170%';
    deleteButton.addEventListener("click", () => {
        let parentDiv = deleteButton.parentElement;
        let currentBalance = balanceValue.innerText;
        let currentExpense = expenditureValue.innerText;
        let parentAmount = parentDiv.querySelector(".amount").innerText;
        balanceValue.innerText = parseInt(currentBalance) + parseInt(parentAmount);
        expenditureValue.innerText = parseInt(currentExpense) - parseInt(parentAmount);
        parentDiv.remove();
    });
    list.appendChild(subListContent);
    subListContent.appendChild(deleteButton);
    document.getElementById("list").appendChild(subListContent);
};

