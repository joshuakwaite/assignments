var shopper = {
    groceryStoreName: "Smith's",
    shopperCardNum: 42,
    isMember: true,
    itemsInCart: [
        {
            itemName: "Milk",
            type: "Skim",
            category: "Dairy",
            price: 4.28,
            organic: true
        },
        {
            itemName: "Cheese",
            type: "Swiss",
            category: "Dairy",
            price: 10.99,
            organic: false
        }
    ],
    totalPrice: function() {
        var totalPrice = 0;
        for (var i = 0; i < this.itemsInCart.length; i++) {
            totalPrice = totalPrice + this.itemsInCart[i].price;
        }
        return totalPrice;
    }
}

console.log(shopper.totalPrice());