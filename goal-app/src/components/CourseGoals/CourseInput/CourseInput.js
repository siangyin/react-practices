import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim().length === 0) {
			console.log("invalid input");
			setIsValid(false);
		} else {
			setIsValid(true);
		}

		return props.onAddGoal(enteredValue);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className="form-control">
				<label style={!isValid ? { color: "red" } : { color: "purple" }}>
					Course Goal
				</label>
				<input
					style={{ borderColor: !isValid ? "red" : "purple" }}
					type="text"
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
