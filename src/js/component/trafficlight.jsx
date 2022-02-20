import React, { useState, useEffect } from "react";
import Light from "./light.jsx";
import propTypes from "prop-types";

// This array determines the duration of each traffic turn

const lightDurations = [10000, 7000, 3000];

// Using props, this function changes the color of the trafficlight each time the interval ends

const TrafficLight = (props) => {
	const [colorIndex, setColorIndex] = useState(props.initialValue);

	useEffect(() => {
		const timer = setTimeout(() => {
			setColorIndex((colorIndex + 1) % 3);
		}, lightDurations[colorIndex]);
		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div className={`traffic-light ${props.className}`}>
			<Light color="#F21B1B" active={colorIndex === 0} />
			<Light color="#F2CC0C" active={colorIndex === 2} />
			<Light color="#4CB432" active={colorIndex === 1} />
		</div>
	);
};

export default TrafficLight;

TrafficLight.propTypes = {
	initialValue: propTypes.number,
	className: propTypes.string,
};
