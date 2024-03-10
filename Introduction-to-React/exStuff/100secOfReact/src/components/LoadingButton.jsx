import React, { useState } from 'react';
import './LoadingButton.css'

const LoadingButton = (props) => {
  return (
    <button onClick={props.onClick} className='button0'>
      {props.loading ? <div className="loader" /> : props.label}
    </button>
  );
};

// Alternative
// const LoadingButton = (props) => {
//   const { onClick, loading, label } = props;
//   return (
//     <button onClick={onClick} type="button">
//       {loading ? <div className="loader" /> : label}
//     </button>
//   );
// };

// Alternative
// const LoadingButton = ({ onClick, loading, label }) => {
//   return (
//     <button onClick={onClick} type="button">
//       {loading ? <div className="loader" /> : label}
//     </button>
//   );
// };

export default LoadingButton;
