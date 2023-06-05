// import MyComponent from './MyComponent';
// import Counter from './Counter';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
import React, { Component } from 'react';
// import ScrollBox from './ScrollBox';
// import { IterationSample } from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import './App.css';
import Counter from './NewCounter';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: getRandomColor(),
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    //버튼 누를때마다 랜덤클릭 생성하는 메소드 호출
    //color값을 props로 설정해서 넘김
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
        <Counter />
      </div>
    );
  }
}
export default App;
