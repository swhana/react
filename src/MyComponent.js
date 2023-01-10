import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
  //비구조화 할당 방법
  // const { name, children } = props;

  return (
    <div>
      제 이름은 {name}이구요
      <br />
      children값은 {children}입니다
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

//name값은 무조건 string으로 받겠다는 뜻
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
