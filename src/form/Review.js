import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const { steps } = props;
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const { name, gender, age } = steps;
    setName(name.value);
    setGender(gender.value);
    setAge(age.value);
  }, [steps]);

  return (
    <div style={{ width: "100%" }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

export default Review;