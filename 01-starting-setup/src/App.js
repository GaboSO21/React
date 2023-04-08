import Expenses from "./components/Expenses/Expenses";

function App() {

    const expenses = [
        {
            title: 'Car Insurance',
            amount: 234.21,
            date: new Date(2021, 2, 25)
        },
        {
            title: 'Toilet paper',
            amount: 234.21,
            date: new Date(2021, 2, 25)
        },
        {
            title: 'Toys',
            amount: 234.21,
            date: new Date(2021, 2, 25)
        },
    ]

    return (
        <div>

            <Expenses expenses={expenses} />

        </div>
    );
}

export default App;
