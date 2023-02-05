import React from "react";

export const Buttons = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map((option) => (
                <button type="button" key={option} onClick={() => onLeaveFeedback(option)}>{option}</button>
            ))}
        </div>
    )
};