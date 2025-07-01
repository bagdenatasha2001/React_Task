
import './App.css';
import ExpenseItem from './components/ExpenseItem';


function App() {
  let Expense=[
    {
    id:'e1',
    title:'Rent',
    amount:3000,
    date:new Date(2020, 5, 12)
    
  },
   {
    id:'e2',
    title:'Electricity bill',
    amount:700,
    date:new Date(2021, 8, 10)
    
  },
   {
    id:'e3',
    title:'Coffee/Tea',
    amount:500,
    date:new Date(2023, 4, 9)
    
  },
   {
    id:'e4',
    title:'Laptop',
    amount:30000,
    date:new Date(2024, 4, 16)
    
  },
  {
    id:'e5',
    title:'Gym Membership',
    amount:7000,
    date:new Date(2024, 5, 8)
    
  },
  {
  id: 'e6',
  title: 'Grocery Shopping',
  amount: 2500,
  date: new Date(2024, 6, 1) 
},
{
  id: 'e7',
  title: 'Netflix Subscription',
  amount: 499,
  date: new Date(2024, 9, 2) 
},
{
  id: 'e8',
  title: 'Petrol',
  amount: 1500,
  date: new Date(2024, 11, 3) 
},
{
  id: 'e9',
  title: 'Books & Stationery',
  amount: 800,
  date: new Date(2024, 12, 4) 
}




]
  return (
 <div>
    <h2>Personal Expense Tracker </h2>
  <ExpenseItem
    date ={Expense[0].date}
    title={Expense[0].title}
    amount={Expense[0].amount}

  />

  <ExpenseItem
    date ={Expense[1].date}
    title={Expense[1].title}
    amount={Expense[1].amount}

  />
  <ExpenseItem
    date ={Expense[2].date}
    title={Expense[2].title}
    amount={Expense[2].amount}

  />
  <ExpenseItem
    date ={Expense[3].date}
    title={Expense[3].title}
    amount={Expense[3].amount}

  />
  <ExpenseItem
    date ={Expense[4].date}
    title={Expense[4].title}
    amount={Expense[4].amount}

  />
  <ExpenseItem
    date ={Expense[5].date}
    title={Expense[5].title}
    amount={Expense[5].amount}

  />
  <ExpenseItem
    date ={Expense[6].date}
    title={Expense[6].title}
    amount={Expense[6].amount}

  />
  <ExpenseItem
    date ={Expense[7].date}
    title={Expense[7].title}
    amount={Expense[7].amount}

  />
  <ExpenseItem
    date ={Expense[8].date}
    title={Expense[8].title}
    amount={Expense[8].amount}

  />
  



    </div>
    
  );
}

export default App;






