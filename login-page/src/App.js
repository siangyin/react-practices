import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};

	const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

	// useEffect hook with callBack and empty array of dependencies will be called: on initial render (aka mounting-phase). Only run once.

	useEffect(() => {
		if (storedUserLoggedInInfo === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		setIsLoggedIn(false);
		localStorage.setItem("isLoggedIn", "0");
	};

	return (
		<React.Fragment>
			<MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
			<main>
				{!isLoggedIn && <Login onLogin={loginHandler} />}
				{isLoggedIn && <Home onLogout={logoutHandler} />}
			</main>
		</React.Fragment>
	);
}

export default App;
