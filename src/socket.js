import openSocket from 'socket.io-client';

let currentSubscriber = { setState: () => undefined };

const socket = openSocket('http://localhost:8000');


socket.on('newsUpdate', (news) => {
  currentSubscriber.setState({ news });
});

socket.on('weatherUpdate', (weather) => {
  currentSubscriber.setState({ weather });
});

socket.on('financeUpdate', (finance) => {
  currentSubscriber.setState({ finance });
});

socket.on('sportsUpdate', (scores) => {
  currentSubscriber.setState({ scores });
});

const subscribe = (subscriber) => {
  currentSubscriber = subscriber;
};

export default subscribe;
