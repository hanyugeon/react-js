import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children, review, type }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      children 값은 {children}
      입니다. <br />
      {review} 하는 중이에요. <br />
      {type} PropTypes란? 콘솔창과 line23을 확인해봐. <br />
      제가 제일 좋아하는 숫자는 {favoriteNumber}입니다. <br />
      <hr />
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  type: PropTypes.number,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
