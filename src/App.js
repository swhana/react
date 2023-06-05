import React, { Component } from 'react';
import './App.css';
import Info from './Info';

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
        <Info />
      </div>
    );
  }
}
export default App;
