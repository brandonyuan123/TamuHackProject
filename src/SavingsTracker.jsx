import { createHandler } from './goalManager.js';
import React, { useState } from 'react';
import "./savingsTracker.css";

export default function SavingsTracker() {
  var goalHandler = createHandler();

  // total saved, amt needed, url, name
  goalHandler.addGoal(35, 230, 'http://amazon.com', 'Ryzen 5 7600X');
  goalHandler.addGoal(265, 450, 'http://amazon.com', 'Radeon RX 6800XT');
  goalHandler.addGoal(50, 85, 'http://amazon.com', 'Teamgroup T-force Delta cl38 6000mhz');
  goalHandler.addGoal(50, 65, 'http://amazon.com', 'Samsung 980 1TB');
  goalHandler.addGoal(100, 170, 'http://amazon.com', 'Gigabyte B650 Gaming X AX');
  goalHandler.addGoal(85, 85, 'http://amazon.com', 'Corsair RM750e');

  const [goalsList, setGoalsList] = useState(goalHandler.getAllGoals());
  const [amountSaved, setAmountSaved] = useState('');
  const [amountRequired, setAmountRequired] = useState('');
  const [url, setUrl] = useState('');
  const [productName, setProductName] = useState('');

  const handleAddGoal = () => {
    const newGoal = [amountSaved, amountRequired, url, productName];
    goalHandler.addGoal(amountSaved, amountRequired, url, productName);

    // Update the goalsList state to trigger re-render
    setGoalsList(goalHandler.getAllGoals());

    // Clear the input fields
    setAmountSaved('');
    setAmountRequired('');
    setUrl('');
    setProductName('');
  };

  return (
    <>
      <div>
        <h1>Goals List:</h1>
        <p>this is where all your goals will be: [Amount saved, Amount required, URL, Product Name]</p>
      </div>
      <div>
        <ul>
          {goalsList.map((goal, index) => (
            <div key={index} className='goalBox'>
              {goal.map((item, index2) => (
                <li key={index2}>{item}</li>
              ))}
            </div>
          ))}
        </ul>
        <form>
          <label htmlFor='amountSaved'>Amount Saved:</label>
          <input type='text' id='amountSaved' placeholder='Enter amount saved' value={amountSaved} onChange={(e) => setAmountSaved(e.target.value)}></input>

          <label htmlFor='amountRequired'>Amount Required:</label>
          <input type='text' id='amountRequired' placeholder='Enter amount required' value={amountRequired} onChange={(e) => setAmountRequired(e.target.value)}></input>

          <label htmlFor='url'>URL:</label>
          <input type='text' id='url' placeholder='Enter URL' value={url} onChange={(e) => setUrl(e.target.value)}></input>

          <label htmlFor='productName'>Product Name:</label>
          <input type='text' id='productName' placeholder='Enter product name' value={productName} onChange={(e) => setProductName(e.target.value)}></input>

          <button type="button" onClick={handleAddGoal}>Add</button>
        </form>
      </div>
    </>
  );
}


// import {createHandler} from './goalManager.js';
// import React, {useState} from 'react';

// import "./savingsTracker.css";

// export default function SavingsTracker() {
//     var goalHandler = createHandler()
//     let moneyToAdd;

//     // total saved, amt needed, url, name
//     goalHandler.addGoal(35, 230, 'http://amazon.com', 'Ryzen 5 7600X');
//     goalHandler.addGoal(265, 450, 'http://amazon.com', 'Radeon RX 6800XT');
//     goalHandler.addGoal(50, 85, 'http://amazon.com', 'Teamgroup T-force Delta cl38 6000mhz');
//     goalHandler.addGoal(50, 65, 'http://amazon.com', 'Samsung 980 1TB');
//     goalHandler.addGoal(100, 170, 'http://amazon.com', 'Gigabyte B650 Gaming X AX');
//     goalHandler.addGoal(85, 85, 'http://amazon.com', 'Corsair RM750e');

//     //var goal = goalHandler.getGoal(0)
//     var goalsList = goalHandler.getAllGoals()

//     //const [goal, setGoal] = useState(goalsList);
//     const [newGoal, setNewGoal] = useState(goalsList);

//     const handleAddGoal = () => {
//         setGoal(prevGoal => [...prevGoal, newGoal]);
//     }

//     return (
//         <>
//         <div>
//             <h1>Goals List:</h1>
//             <p>this is where all your goals will be: [Amount saved, Amount required, URL, Product Name]</p>
//         </div>
//         <div>
//             <ul>
//                 {goalsList.map((goal, index) => (
//                     <div key={index} className='goalBox'>
//                         {goal.map((item, index2) => (
//                             <li key={index2}>{item}</li>
//                         ))}
//                     </div>
//                 ))}
//             </ul>
//             <form>
//                 <label for='moneyToAdd'></label>
//                 <input type='text' id='textInput' placeholder='enter $ amt' value={newGoal} onChange={(e) => setNewGoal(e.target.value)}></input>

//                 <button type="submit" onClick={handleAddGoal}>Add</button> 
//             </form>
//         </div>
//         </>
//     );
// }

