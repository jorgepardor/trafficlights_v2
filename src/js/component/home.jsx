import React from "react";
import TrafficLight from "./trafficlight.jsx";

//create your first component
const Home = () => {
	return (
		<div className="App">
			<TrafficLight initialValue={0} />
			<TrafficLight initialValue={1} />
		</div>
	);
};

export default Home;
