import './App.css';

import Expenses from './component/Expenses';

function App() {
  const expenses=[
    {id:'e1', title:"expense 1 ", amount:200.20 , date:new Date(2022,2,20)},
    {id:'e2', title:"expense 2 ", amount:123.10 , date:new Date(2021,3,10)},
    {id:'e3', title:"expense 3 ", amount:150.66 , date:new Date(2020,4,15)},
    {id:'e4', title:"expense 4 ", amount:300.00 , date:new Date(2022,6,3)}
  ]
  return (
    <div className="expenses">
      <h2 style={{'color':'wheat'}}>Let's get Start!</h2>
      <Expenses expenses={expenses}/>
      
    </div>
  );
}

export default App;
