import fs from 'fs';

class goal {
    constructor(filename = 'financialGoalData.json') {
        this.filename = filename
    }

    setGoal(goalAmount, savedAmount, url, name) {
        this.goalData = {
            goalAmount,
            savedAmount,
            url,
            name,
        };

        this.writeToFile();
    }

    updateGoal(addedAmount) {
        this.readFromFile(() => {
            this.goalData.savedAmount += addedAmount;
            this.writeToFile(true); // Update message
        });
    }

    checkUpdatedGoal() {
        this.readFromFile(() => {
            this.goalData.completed = this.goalData.savedAmount >= this.goalData.goalAmount;
            this.writeToFile(true); // Update message
        });
    }

    readFromFile(callback) {
        fs.readFile(this.filename, 'utf8', (err, data) => {
            if (err) {
                console.log('Could not read file:', err);
            } else {
                this.goalData = JSON.parse(data);
                callback();
            }
        });
    }

    writeToFile(updateMessage = false) {
        fs.writeFile(this.filename, JSON.stringify(this.goalData, null, 3), (err) => {
            if (err) {
                console.log('Could not write to file:', err);
            } else {
                if (updateMessage) {
                    console.log('Updated Successfully:', this.goalData.savedAmount, this.goalData.completed);
                } else {
                    console.log('Financial goal saved successfully.');
                }
            }
        });
    }
}

