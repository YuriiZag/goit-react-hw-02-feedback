import React from 'react';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback-options/feedback-options';
import { Statitstics } from './statistics/statistics';

const OPTIONS_LIST = ['good', 'neutral', 'bad'];

let total = 0;
let positiveFeedback = 0;


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickHandler = e => {
    this.setState(
      prevState => {
        return {
          [e.target.value]: prevState[e.target.value] + 1,
        };
      });

    
    this.positiveFeedbackCalc(this.state.good)
    this.totalFeedbackCalc();
    console.log(this.state);
 
  };

  totalFeedbackCalc = () => {
    total += 1;
    return total;
  };
   positiveFeedbackCalc = () => {
     this.setState(prevState => {
             positiveFeedback = (prevState.good / total) * 100 + '%';
           }
      )
  };

  render() {
    return (
      <>
        <Section title="feedback">
          <FeedbackOptions
            options={OPTIONS_LIST}
            onLeaveFeedback={this.onClickHandler}
          ></FeedbackOptions>
        </Section>
        <Section title="feedback">
          <Statitstics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positiveFeedback}
          ></Statitstics>
        </Section>
      </>
    );
  }
}
