import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">No data found.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense, i) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					date={expense.date}
					amount={expense.amount}
				/>
			))}
		</ul>
	);
}

export default ExpensesList;
