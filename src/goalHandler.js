import FinancialGoal from './goalObject.js';
import fs from 'fs';
class goalHandler {
    constructor(filename = 'financialGoalData.json') {
        this.filename = filename
        this.goals = this.readFromFile();
    }

    readFromFile() {
        try {
            const data = fs.readFileSync(this.filename, 'utf-8')
            return JSON.parse(data)
        } catch (error) {
            return [];
        }
    }

    writeToFile() {
        try {
            fs.writeFileSync(this.filename, JSON.stringify(this.goals, null, 3));
        } catch (error) {
            console.error('Error writing file:', error);
        }
    }

    addGoal(goalAmount, savedAmount, url, name) {
        const newGoal = new FinancialGoal(goalAmount, savedAmount, url, name);
        this.goals.push(newGoal);
        this.writeToFile();
    }

    updateGoal(index, addedAmount) {
        if (index >= 0 && index < this.goals.length) {
            this.goals[index].savedAmount += addedAmount;
            this.writeToFile();
            return this.goals[index];
        } else {
            throw new Error('Goal not found at index: ' + index);
        }
    }

    getGoal(index) {
        if (index >= 0 && index < this.goals.length) {
            return this.goals[index];
        } else {
            throw new Error('Goal not found at index: ' + index);
        }
    }

    getAllGoals() {
        return this.goals;
    }

    getPercent(index) {
        return this.goals[index].savedAmount / this.goals[index].goalAmount;
    }

    getGoalComplete(index) {
        return this.goals[index].savedAmount >= this.goals[index].goalAmount;
    }
}

export default goalHandler;
