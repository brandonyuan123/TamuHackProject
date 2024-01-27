import FinancialGoal from './goalObject.js';

class goalHandler {
    constructor() {
        this.goals = [];
    }

    addGoal(goalAmount, savedAmount, url, name) {
        const newGoal = new FinancialGoal();
        newGoal.setGoal(goalAmount, savedAmount, url, name);
        this.goals.push(newGoal);
    }

    updateGoal(index, addedAmount) {
        if (this.goals[index]) {
            this.goals[index].updateGoal(addedAmount);
        } else {
            console.log('Goal not found at index:', index);
        }
    }

    checkGoal(index) {
        if (this.goals[index]) {
            this.goals[index].checkUpdatedGoal();
        } else {
            console.log('Goal not found at index:', index);
        }
    }

    listGoals() {
        this.goals.forEach((goal, index) => {
            console.log(`Goal ${index}:`, goal.goalData);
        });
    }
}

export default goalHandler;
