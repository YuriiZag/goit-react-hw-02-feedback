import { StatitsticsList, Value, Header, Container } from './statistics.styled'
import { Notification } from 'components/notification-message/notification'; 

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
