import React, { Component } from 'react';

class LifeCycleSample extends Component {
  //state
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  //컴포넌트를 만들 때 실행됨
  //생성자
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //컴포넌트가 마운트&업데이트될 때 실행
  //nextProps를 prevState에 동기화
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  //컴포넌트가 마운트되어 렌더링을 다 마친 후 실행
  componentDidMount() {
    console.log('componentDidMount');
  }

  //props나 state값이 변경됐을 떄, 리렌더링을 시작할지 결정
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    //숫자의 마지막 자리가 4면 리렌더링하지 않음
    return nextState.number % 10 !== 4;
  }

  //
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //render에서 만들어진 결과물이 실제로 브라우저에 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color; //componentDidUpdate에서 snapshot으로 가져감
    }
    return null;
  }

  //업데이트(리렌더링) 완료 후 실행
  //업데이트 이전 데이터에 접근할 수 있음
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  //필수 메소드
  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
