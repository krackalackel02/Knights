import React, { useRef } from "react";
import { ACTIONS } from "../features/Board/gameReducer";
import { useGame } from "../features/Board/gameContext";
import "./Slider.css";

export default function Slider() {
    const { state, dispatch } = useGame();
    const sliderVal = useRef();
    const sliderDef=8
    const sliderMin=4
    const sliderMax=12

    const handleChange = (e) => {
        const sliderValue = sliderVal.current.value;
        dispatch({ type: ACTIONS.CHANGEGRID, payload: { grid: sliderValue } });
    };

    return (
        <div className="slider-grid">
            <label htmlFor="range" className="slider-label">
                Grid Size: {sliderVal.current?.value || sliderDef}
            </label>
            <div className="slider-input">
                <input
                    type="range"
                    name="range"
                    id="range"
                    min={sliderMin}
                    max={sliderMax}
                    step={1}
                    defaultValue={sliderDef}
                    onChange={handleChange}
                    className="slider-input"
                    ref={sliderVal}
                />
                <div className="slider-val">
                    <div>{sliderMin}</div>
                    <div>{sliderMax}</div>
                </div>
            </div>
        </div>
    );
}
