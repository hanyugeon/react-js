import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClassComponent extends Component {
  render() {
    const { hi, what, num } = this.props;
    return (
      <div>
        {hi}, 제 이름은 {what} 입니다.
        <br />
        저의 {num}번째 컴포넌트 에요.
      </div>
    );
  }
}

MyClassComponent.defaultProps = {
  hi: '안녕하세요',
  what: '이름을 설정해 주세요',
};

MyClassComponent.propTypes = {
  num: PropTypes.number.isRequired,
};

export default MyClassComponent;
