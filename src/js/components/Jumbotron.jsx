import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-light mb-4 rounded d-flex align-items-center" style={{ minHeight: '300px' }}>
      <div className="container">
        <h1 className="fs-1 fw-bold">A Warm Welcome!</h1>
        <p className="fs-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi id rerum assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur modi id rerum assumenda.
        </p>
        <button className="btn btn-primary btn-lg">Call to action!</button>
      </div>
    </div>
  );
};

export default Jumbotron;