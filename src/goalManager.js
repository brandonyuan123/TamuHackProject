import goalHandler from './goalHandler.js';

let goalManager = null
export function createHandler(){
    goalManager = new goalHandler();
    return goalManager;
}

export function addGoal(goalAmount, savedAmount, url, name) {
    goalManager.addGoal(goalAmount, savedAmount, url, name);
}

export function  getGoal(index) {
    return goalManager.getGoal(index)
}

export function getPercent(index) {
    return goalManager.getPercent(index)
}

/*
goalManager.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
goalManager.addGoal(200, 100, 'http://amazon.com', 'SSD');

goalManager.updateGoal(0, 200)
console.log(goalManager.getGoal(0))
console.log(goalManager.getPercent(0))
console.log(goalManager.getGoalComplete(0))
goalManager.updateGoal(0, 400)
console.log(goalManager.getGoal(0))
console.log(goalManager.getPercent(0))
console.log(goalManager.getGoalComplete(0))
 */