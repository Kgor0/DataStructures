var nums = [];
var totalOrderAmt = 0;
var cart = [];
var order = [];

class stock_items {
    constructor(stock_id, stock_name, price,) {
        this.stock_id = stock_id;
        this.stock_name = stock_name;
        this.price = price;
    }
}

class cart_item {
    constructor(id, description, quantity) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
    }
}

class order_item {
    constructor(order_id, stock_id, quantity) {
        this.order_id = order_id;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
}

let items = [
    new stock_items(1, "Coke", 9.5),
    new stock_items(2, "KitKat", 4.5),
    new stock_items(3, "Fanta", 8.5),
    new stock_items(4, "BarOne", 5.5),
    new stock_items(5, "Sprite", 9.5),
    new stock_items(6, "Lunchbar", 6.5),
    new stock_items(7, "Stoney", 5.5),
    new stock_items(8, "Tex", 3.5),
    new stock_items(9, "iron brew", 4.5),
    new stock_items(10, "5 Star", 8.5)
];

function add_selection(i) { 
    if (cart.length == 0) {
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
        display_all();
        return;
    } else {
        for (j = 0; j < cart.length; j++) {
            if (cart[j].id == items[i].stock_id) { 
                cart[j].quantity += 1;
                display_all();
                return;
            }
        }
        cart.push(new cart_item(items[i].stock_id, items[i].stock_name, 1));
    }
    display_all();
    return;
}

function subtract_selection(x) {

}

var order_number = 1;
var orders = [];
var checkout_list = [];

function displayTotal() {
    document.getElementById("total").innerHTML = "<br/><br/>Total order amount is R" + totalOrderAmt.toFixed(2);
}


//if (totalOrderAmt != 0) {
//for (i in cart) {
//  checkout_list.push("<br>" + cart[i].quantity + "x " + cart[i].stock_name + "\t")
//}
//document.getElementById("total").innerHTML = "ORDER NUMBER: " + order_number +
//  "<br>Items:" + checkout_list + "<br/>Total order amount is R" + totalOrderAmt.toFixed(2);
//orders.push("ORDER NO.: " + order_number + " " + checkout_list + "<br> Total: " + totalOrderAmt + "<br><br>");
//checkout_list = [];
// order_number += 1;
//cart = [];
//for (i in items) {
//items[i].quantity = 0;
//  items[i].total = 0;
//    totalOrderAmt = 0;
//  }
//    display_all();
//  }


function display_all() {

    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    // myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
   // myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    //  myTable += "<th style='width: 100px; color: red; text-align: right;'>Subtract</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + items[i].stock_id + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].stock_name + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i].price + "</td>";
        // myTable += "<td style='width: 100px; text-align: right;'>" + items[i].quantity + "</td>";
       // myTable += "<td style='width: 100px; text-align: right;'>" + items[i].total + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        // myTable += "<td><button onclick='subtract_selection(" + i + ")'>Subtract</button></td>";
    }

    myTable += "</table>";
    // myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";

    var myCart = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myCart += "<th style='width: 100px; color: red; text-align: right;'>Subtract</th>";


    for (i = 0; i < cart.length; i++) {
        myCart += "<tr><td style='width: 100px; text-align: right;'>" + cart[i].id + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].description + "</td>";
        myCart += "<td style='width: 100px; text-align: right;'>" + cart[i].quantity + "</td>";
        myCart += "<td><button onclick='subtract_selection(" + i + ")'>Subtract</button></td>";
    }

    myCart += "</table>";

    document.getElementById("demo").innerHTML = myTable;
    document.getElementById("cart").innerHTML = myCart;

    //  var myCart = "<cart style='color: black; text-align: left;'>"
    // var myCart = "<br/>  YOUR CART  <br/>";
    //  var emptyCart = "<br>--is empty--<br>"
    //  if (cart.length == 0) {
    //      myCart += emptyCart;
    //  }
    //  for (var i in cart) {
    //      myCart += "    " + cart[i].quantity + " x " + cart[i].stock_name + "<br>";
    //   }
    //  myCart += "<br>TOTAL: " + totalOrderAmt;
    //  document.getElementById("total").innerHTML = myTable;
    //  myCart += "</cart>";
    //  myTable += "<br/><br/><button onclick='displayTotal()'> CHECKOUT </button>";
    //  myTable += "\t\t<button onclick='order_history()'>ORDERS HISTORY</button>";


    // document.write(myTable);
    // document.getElementById("demo").innerHTML = myTable;
    window.onload = function () {
        display_all();
    }
}
//window.onload = function () {
  //  display_all();
//}
