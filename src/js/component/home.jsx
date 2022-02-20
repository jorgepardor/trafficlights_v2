import React from "react";
import TrafficLight from "./trafficlight.jsx";
import PedestrianLight from "./pedestrianlight.jsx";

import Citybg from "../../img/citybg.png";

//create your first component
const Home = () => {
	return (
		<div className="main">
			<div className="title"></div>
			<div className="city" style={{ backgroundImage: `url(${Citybg})` }}>
				<div>
					<TrafficLight
						initialValue={0}
						className={`JST, JSTtrafNorth`}
					/>
					<PedestrianLight initialValue={1} />
					<PedestrianLight initialValue={1} />
				</div>

				<div>
					<TrafficLight initialValue={0} />
					<PedestrianLight initialValue={1} />
					<PedestrianLight initialValue={1} />
				</div>

				<div>
					<TrafficLight initialValue={1} />
					<PedestrianLight initialValue={0} />
					<PedestrianLight initialValue={0} />
				</div>

				<div>
					<TrafficLight initialValue={1} />
					<PedestrianLight initialValue={0} />
					<PedestrianLight initialValue={0} />
				</div>
			</div>

			<div className="title">
				<h1>
					Welcome to the crossroads between <br />
					Javascript Avenue and React Road
				</h1>
			</div>
		</div>
	);
};

export default Home;
