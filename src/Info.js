import { useReducer } from "react";


function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target); //target 프로퍼티를 action함수로 보내고 해당 프로퍼티의 name값과 value값을 활용해 reducer함수 호출
  }

  return (
    <div>
      <input name="name" value={name} onChange={onChange} />
      <input name="nickname" value={nickname} onChange={onChange} />

      <div>
        <b>이름 : {name}</b>
        <b>닉네임 : {nickname}</b>
      </div>
    </div>
  )
}

export default Info;