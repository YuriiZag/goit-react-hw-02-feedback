import { OptionList, Option, Header, Container } from './feedback-options.styled'


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
