import React from 'react';
import './ValidationSample.css';

class ValidationSample extends React.Component {
  //상태 객체
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  //입력값으로 password를 변경
  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000', //비밀번호가 0000일 경우에 true
    });

    this.input.focus(); //focus(커서)가 다시 input창으로 넘어간다
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange} //onChange이벤트가 발생하면 handleChange호출
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          } //클릭이 되었다면 this.state.validated 상태 판별, 아니면 빈값
          //판별해서 validated가 true면 success, 아니면 failure 반환
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
