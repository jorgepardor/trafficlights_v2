import React from "react";

// Light component changes opacity of the trafficlight when each color is active

const Light = ({ color, active }) => (
	<div
		className="light"
		style={{ backgroundColor: color, opacity: active ? 1 : 0.4 }}
	/>
);

export default Light;
