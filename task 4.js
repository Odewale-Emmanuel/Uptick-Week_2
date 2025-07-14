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
