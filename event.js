// const EventEmitter = require("node:events");

// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// });

// emitter.emit("order-pizza", "large", "mushrooms");

const PizzaShop = require("./PizzaShop");

const pizzaShop = new PizzaShop();

pizzaShop.on("order", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();
