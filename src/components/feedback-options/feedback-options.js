import { OptionList, Option, Header, Container } from './feedback-options.styled'
import { PropTypes } from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Container>
      <Header>Please leave feedback</Header>
      <OptionList>
        {options.map(option => {
          return (
            <li key={option}>
              <Option onClick={onLeaveFeedback} value={option}>
                {option}
              </Option>
            </li>
          );
        })}
      </OptionList>
    </Container>
  );
};

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
}