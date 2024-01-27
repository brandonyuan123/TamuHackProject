import goalHandler from './goalHandler.js';

const goalManager = new goalHandler();

goalManager.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
goalManager.addGoal(200, 100, 'http://amazon.com', 'SSD');

console.log("getting specific goals")
console.log(goalManager.getGoal(0))
console.log(goalManager.getGoal(1))
console.log("now getting all goals")
console.log(goalManager.getAllGoals())
