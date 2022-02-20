import React from "react";
import TrafficLight from "./trafficlight.jsx";
import PedestrianLight from "./pedestrianlight.jsx";

import Citybg from "../../img/citybg.png";

const Home = () => {
	return (
		<div className="main">
			<div className="title"></div>

			{/* Background component */}

			<div className="city" style={{ backgroundImage: `url(${Citybg})` }}>
				{/* Javascript North Avenue Lights */}

				<div>
					<TrafficLight
						initialValue={0}
						className={`JST, JSTtrafNorth`}
					/>
					<PedestrianLight
						initialValue={1}
						className={`JSP, JSPedNorthNE`}
					/>
					<PedestrianLight
						initialValue={1}
						className={`JSP, JSPedNorthNW`}
					/>
				</div>

				{/* Javascript South Avenue Lights */}

				<div>
					<TrafficLight
						initialValue={0}
						className={`JST, JSTtrafSouth`}
					/>
					<PedestrianLight
						initialValue={1}
						className={`JSP, JSPedSouthSW`}
					/>
					<PedestrianLight
						initialValue={1}
						className={`JSP, JSPedSouthSE`}
					/>
				</div>

				{/* React Road East Lights */}

				<div>
					<TrafficLight
						initialValue={1}
						className={`RET, RETrafEast`}
					/>
					<PedestrianLight
						initialValue={0}
						className={`REP, REPedEastNE`}
					/>
					<PedestrianLight
						initialValue={0}
						className={`REP, REPedEastSE`}
					/>
				</div>

				{/* React Road West Lights */}

				<div>
					<TrafficLight
						initialValue={1}
						className={`RET, RETrafWest`}
					/>
					<PedestrianLight
						initialValue={0}
						className={`REP, REPedWestSE`}
					/>
					<PedestrianLight
						initialValue={0}
						className={`REP, REPedWestNW`}
					/>
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
