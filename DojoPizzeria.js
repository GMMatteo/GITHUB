function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crustType = [
    "deep dish",
    "hand tossed",
    "thin",
    "gluten free",
    "thick"
];

var sauceType = [
    "traditional",
    "marinara",
    "spicy marinara",
    "white",
    "no sauce",
    "fresh tomatoes"
];

var cheeses = [
    "mozzarella",
    "feta",
    "blue cheese",
    "goat cheese",
    "provolone",
    "buffalo mozzarella", 
    "no cheese"
];

var toppings = [
    "pepperoni", 
    "sausage", 
    "olives", 
    "hot peppers", 
    "mushrooms", 
    "onions", 
    "bbq chicken", 
    "pineapple", 
    "ham"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p3);

var p4 = pizzaOven("thick", "white", "feta", ["olives", "hot peppers"]);
console.log(p4);

var p5 = pizzaOven("thin", "marinara", "mozzarella", "hot peppers");
console.log(p5);

var p6 = pizzaOven("thin", "marinara", "mozzarella", ["pepperoni", "sausage", "hot peppers"]);
console.log(p6);

console.log(randomPizza());
