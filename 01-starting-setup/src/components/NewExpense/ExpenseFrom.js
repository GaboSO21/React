import { useState } from 'react';
import './ExpenseFrom.css'

const ExpenseFrom = (props) => {

    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });

    const titleChangeHandler = (event) => {

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });

    };

    const amountChangeHandler = (event) => {

        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });

    };

    const dateChangeHandler = (event) => {

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });

        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });

    };

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }

        props.onSaveExpenseData(expenseData);

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        })

    }

    return (

        <form onSubmit={submitHandler}>

            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>{userInput.enteredTitle}</label>
                    <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>{userInput.enteredAmount}</label>
                    <input type='number' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>{userInput.enteredDate}</label>
                    <input type='date' value={userInput.enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' onClick={props.onCancel}>Add expense</button>
            </div>

        </form>

    )

}

export default ExpenseFrom;
