import React, { Component } from "react";
import { Buttons } from "./Buttons/Buttons";
import { Statistics } from "./Statistic/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification.jsx/Notification";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    leaveFeedback = (event) => { 
        this.setState(prevState => ({
            [event]: prevState[event] + 1
        }));
    };

    countTOtalFeedback = () => {
        return Math.round(this.state.good + this.state.neutral + this.state.bad);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTOtalFeedback());
    };

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <>
                <Section title="Please leave feedbck">
                    <Buttons options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeedback} />
                </Section>
                <Section title="Statistics">
                    {this.countTOtalFeedback() ?
                        (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTOtalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) :
                        (<Notification message="No feedback given" />)}
                </Section>             
            </>
        );
    }   
};

export default Feedback;