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

const orderQueue = new OrderQueue();
orderQueue.addOrder({ id: 1, item: "Pizza" });
orderQueue.addOrder({ id: 2, item: "Burger" });
console.log("Current queue:", orderQueue.viewQueue());
console.log("Processing order:", orderQueue.processOrder());
console.log("Queue after processing:", orderQueue.viewQueue());

function recommendRestaurants(restaurants) {
  return restaurants.sort((a, b) => b.rating - a.rating);
}

const restaurants = [
  { name: "Sushi Place", rating: 4.7 },
  { name: "Pizza Palace", rating: 4.2 },
  { name: "Burger Barn", rating: 4.5 },
];
console.log("Recommended restaurants:", recommendRestaurants(restaurants));
