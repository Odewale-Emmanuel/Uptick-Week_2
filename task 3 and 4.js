// An
// online food ordering system uses a queue to manage incoming orders.
// Implement a queue data structure to represent this order queue.
// Explain how to add new orders to the queue.
// Simulate processing orders by removing them from the front of the queue.
// Discuss the efficiency of using a queue for this purpose.

// Create a JavaScript function named recommendRestaurants that takes an
// array of restaurant objects as input. Each object should   have the
// following properties:

// name: The name of the restaurant (string)
// rating: The average customer rating of the restaurant (number)

// The function should perform two functionalities:

// 4. Sorting Restaurants:
// Sort the restaurants in descending order based on their rating values.

// Finding Restaurants by Rating: Given an optional targetRating
// (number) passed as a second argument, return a new array containing only
// restaurants with a rating higher than or equal to the targetRating. You
// can use an appropriate searching algorithm (e.g., built-in filter
// methods).

// Example

// const restaurants = [
// { name: "Pizza Palace", rating: 4.8 },
// { name: "Curry Corner", rating: 4.2 },
// { name: "Amazing Asian", rating: 4.5 },
// { name: "Healthy Eats", rating: 3.9 },
// ];

// Input
// TargetRating == 4.4

// const restaurants = [
// { name: "Pizza Palace", rating: 4.8 },
// { name: "Curry Corner", rating: 4.2 },
// { name: "Amazing Asian", rating: 4.5 },
// { name: "Healthy Eats", rating: 3.9 },
// ];

// Output
// function recommendRestaurants(restaurants, targetRating) returns

// [
// { name: "Pizza Palace", rating: 4.8 },
// { name: "Amazing Asian", rating: 4.5 },
// ];

// Explain how to add new orders to the queue.
// [ANSWER]
// My queueing system uses FIFO (First In, First Out) principle, meaning that the first order added to the queue will be the first one processed. To add a new order, we simply push it onto the end of the queue array. This allows us to maintain the order in which orders were received.

// Discuss the efficiency of using a queue for this purpose.
// [ANSWER]
// Using a FIFO queueing system for managing orders is efficient because it allows for quick addition of new orders and processing of existing ones. The time complexity for adding an order is O(1) since we are simply appending to the end of the array. Processing an order (removing from the front) is also O(1) in terms of conceptual understanding, but in JavaScript, it involves shifting elements, which can be O(n). However, for most practical purposes, this approach works well for managing a moderate number of orders.

class OrderQueue {
  constructor() {
    this.queue = [];
  }
  addOrder(order) {
    this.queue.push(order);
  }
  processOrder() {
    if (this.queue.length === 0) {
      console.log("No orders to process.");
      return null;
    }
    const processedOrder = this.queue.shift();
    return processedOrder;
  }
  viewQueue() {
    return this.queue;
  }
}

let id = 0;
const orderQueue = new OrderQueue();
orderQueue.addOrder({ id: ++id, item: "Pizza" });
orderQueue.addOrder({ id: ++id, item: "Burger" });
orderQueue.addOrder({ id: ++id, item: "Sushi" });
orderQueue.addOrder({ id: ++id, item: "Pasta" });
console.log("Current queue:", orderQueue.viewQueue());
console.log("Processing order:", orderQueue.processOrder());
console.log("Queue after processing:", orderQueue.viewQueue());

function recommendRestaurants(restaurants, targetRating) {
  const sortedRestaurants = [...restaurants].sort(
    (a, b) => b.rating - a.rating
  );

  if (targetRating === undefined) {
    return sortedRestaurants;
  }

  return sortedRestaurants.filter(
    (restaurant) => restaurant.rating >= targetRating
  );
}

const restaurants = [
  { name: "Pizza Palace", rating: 4.8 },
  { name: "Curry Corner", rating: 4.2 },
  { name: "Amazing Asian", rating: 4.5 },
  { name: "Healthy Eats", rating: 3.9 },
];

console.log("Recommended restaurants:", recommendRestaurants(restaurants, 4.4));
