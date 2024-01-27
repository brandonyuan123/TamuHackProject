class FinancialGoal {
    constructor(goalAmount, savedAmount, url, name) {
        this.goalAmount = goalAmount;
        this.savedAmount = savedAmount;
        this.url = url;
        this.name = name;
    }

    updateSavedAmount(addedAmount) {
        this.savedAmount += addedAmount;
        this.completed = this.savedAmount >= this.goalAmount;
    }
}

export default FinancialGoal;