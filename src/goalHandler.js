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

    getGoal(index) {
        if (index < this.goals.length) {
            return {goalData: this.goals[index].goalData}
        }
    }

    getAllGoals() {
        return this.goals.map(goal => goal.goalData)
    }
}

export default goalHandler;
