import React, { usetState } from "react";
import DumbButton from "./Button.dumb.jsx";

const SmartButton = ({ isDisabled = false, ...rest }) => isDisabled ? <span>Loading</span> : <DumbButton {...rest} />

export default SmartButton;