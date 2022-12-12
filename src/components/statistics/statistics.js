import { StatitsticsList, Value, Header, Container } from './statistics.styled'
import { Notification } from 'components/notification-message/notification'; 
import {PropTypes} from 'prop-types'

export const Statitstics = props => {
  return (
    <Container>
      <Header>Statitstics</Header>
      <StatitsticsList>
        {props.total === 0 ? (
          <Notification message='There is no feedback'></Notification>
        ) : (
          Object.keys(props).map(p => {
            return (
              <li key={p}>
                <p>
                  {p}:<Value>{props[p]}</Value>
                </p>
              </li>
            );
          })
        )}
      </StatitsticsList>
    </Container>
  );
};

Statitstics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.any.isRequired
}