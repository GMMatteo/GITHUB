var pizza = {
    crustType:    ["thick", "deep dish", "hand tossed"],
    sauceType:  ["marinara", "white", "traditional"],
    cheeses:   ["mozzarella","feta"],
    toppings: ["pepperoni", "sausage", "olives", "hot peppers", "mushrooms", "onions"],
    // display: function(){
    //     console.log("The crust is:     " + this.crustType);
    //     console.log("The sauce are:    " + this.sauceType);
    //     console.log("The cheese is:    " + this.cheeses);
    //     console.log("The toppings are: " + this.toppings);
    // }
};
    
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza [Math.floor(Math.random() * pizza.length)];
}
    
var p1 = pizzaOven("thin", "marinara", "mozzarella", ["pepperoni", "sausage", "hot peppers"]);
console.log(p1);

var p2 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p2);

var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p3);

var p4 = pizzaOven("thick", "white", "feta", ["olives", "hot peppers"]);
console.log(p4);

var p5 = pizzaOven("thin", "marinara", "mozzarella", "hot peppers");
console.log(p5);

// var rp1 = randomPizza();
// console.log(rp1);

// console.log(pizza);
