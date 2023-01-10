import React, { Component } from 'react';

class Counter extends Component {
  // 생성자로 state 초기값 설정해주기
  /*
  constructor(props) {
    super(props); //필수구문
    //state 초기값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  */

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          //클릭했을 때 호출되는 함수
          onClick={() => {
            //setState로 state값 재지정
            // this.setState({ number: number + 1 });

            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('setState가 호출되었습니다');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
