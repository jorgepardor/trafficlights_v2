import React, { useState, useEffect } from "react";
import Light from "./light.jsx";
import propTypes from "prop-types";

// This array determines the duration of each pedestrian turn

const lightDurations = [10000, 10000];

// Using props, this function changes the color of the pedestrian light each time the interval ends

const PedestrianLight = (props) => {
	const [colorIndex, setColorIndex] = useState(props.initialValue);

	useEffect(() => {
		const timer = setTimeout(() => {
			setColorIndex((colorIndex + 1) % 2);
		}, lightDurations[colorIndex]);
		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div className={`traffic-light ${props.className}`}>
			<Light color="#F21B1B" active={colorIndex === 0} />
			<Light color="#0c0" active={colorIndex === 1} />
		</div>
	);
};

export default PedestrianLight;

PedestrianLight.propTypes = {
	initialValue: propTypes.number,
	className: propTypes.string,
};
