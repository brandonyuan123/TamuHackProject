import {createHandler} from './goalManager.js'

export default function SavingsTracker() {
    var goalHandler = createHandler()
    goalHandler.addGoal(400, 10, 'http://amazon.com', 'Graphics Card');
    var goal = goalHandler.getGoal(0)
    return (
        <>
            <h1>{goal}</h1>
        </>
    );
}