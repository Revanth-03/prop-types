import PropTypes from "prop-types";
import { useState } from "react";

function Child(props) {
  return (
    <div>
      I am a Child
      <div>
        {props.hello.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </div>
    </div>
  );
}

Child.propTypes = {
  hello: PropTypes.array.isRequired,
};

export default Child;
