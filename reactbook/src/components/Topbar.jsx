import React from "react";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft logo">
				<span className="react">React</span>
				<span className="book">book</span>
			</div>

			<div className="topbarCenter">
				<div className="searchbar">
					<Search className="searchIcon" />
					<input placeholder="search" className="searchInput" />
				</div>
			</div>

			<div className="topbarRight">
				<span className="topbarLink">Homepage</span>
				<span className="topbarLink">Timeline</span>
			</div>

			<div className="topbarIcons">
				<div className="topbarIconItem">
					<Person />
					<span className="topbarIconBadge">1</span>
				</div>

				<div className="topbarIconItem">
					<Chat />
					<span className="topbarIconBadge">2</span>
				</div>

				<div className="topbarIconItem">
					<Notifications />
					<span className="topbarIconBadge">3</span>
				</div>

				<img
					src="/assets/images/potrait01.jpeg"
					alt="img"
					className="topbarImg"
				/>
			</div>
		</div>
	);
};

export default Topbar;
