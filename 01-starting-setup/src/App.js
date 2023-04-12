import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dummyExpenses = [
    {
        id: 1,
        title: 'Car Insurance',
        amount: 234.21,
        date: new Date(2021, 2, 25)
    },
    {
        id: 2,
        title: 'Toilet paper',
        amount: 234.21,
        date: new Date(2021, 2, 25)
    },
    {
        id: 3,
        title: 'Toys',
        amount: 234.21,
        date: new Date(2021, 2, 25)
    },
]

function App() {

    const [newExpenses, setNewExpenses] = useState(dummyExpenses);

    const addExpenseHandler = (expense) => {

        // newExpenses.push(expense);
        //
        // console.log(newExpenses);
        //
        // setNewExpenses(newExpenses);

        // Updating state when depends on previous state
        console.log(expense);
        setNewExpenses((prevState) => [expense, ...prevState]);

    }

    return (
        <div>

            <NewExpense onSaveExpense={addExpenseHandler} />

            <Expenses expenses={newExpenses} />

        </div>
    );
}

export default App;
