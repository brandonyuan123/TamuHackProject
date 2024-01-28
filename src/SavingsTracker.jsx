import {createHandler} from './goalManager.js'

export default function SavingsTracker() {
    var goalHandler = createHandler()

    goalHandler.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
    goalHandler.addGoal(1, 10, 'http://amazon.org', 'Graphics Card');
    goalHandler.addGoal(400, 20, 'http://amazon.com', 'Graphics CardTTESTESTESTE');
    goalHandler.addGoal(99999, 10, 'http://amazon.com', 'Graphics Card');
    goalHandler.addGoal(0, 10, 'http://amazon.comTESTESTSET', 'Graphics Card');
    goalHandler.addGoal(400, 120, 'http://amazon.com', 'Graphics Card');

    //var goal = goalHandler.getGoal(0)
    var goalsList = goalHandler.getAllGoals()
    return (
        <>
        <div>
            <h1>Goals List:</h1>
            <p>this is where all your goals will be etc etc</p>
        </div>
        <div>
            <ul>
                {goalsList.map((goal, index) => (
                    <div key={index}>
                        {goal.map((item, index2) => (
                            <li key={index2}>{item}</li>
                        ))}
                    </div>
                ))}
            </ul>
        </div>
        </>
    );
}