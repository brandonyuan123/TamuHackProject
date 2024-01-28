import {createHandler} from './goalManager.js'

export default function SavingsTracker() {
    var goalHandler = createHandler()
    goalHandler.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
    var goal = goalHandler.getGoal(0)
    return (
        <>
        <div>
            <h1>Goals List:</h1>
            <p>this is where all your goals will be etc etc</p>
        </div>
        <div>
            <ul>
                {goal.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        </>
    );
}