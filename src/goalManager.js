import goalHandler from './goalHandler.js';

const goalManager = new goalHandler();

goalManager.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
goalManager.addGoal(200, 100, 'http://amazon.com', 'SSD');

goalManager.listGoals();
