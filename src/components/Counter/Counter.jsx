import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div>
                <span>Please leave feedback</span>
                <div>
                    <buttons type="button">Good</buttons>
                    <buttons type="button">Neutral</buttons>
                    <buttons type="button">Bad</buttons>
                </div>
                <div>
                    <span>Statistics</span>
                    <ul>
                        <li>Good: </li>
                        <li>Neutral: </li>
                        <li>Bad: </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Counter;