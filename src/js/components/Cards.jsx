import React from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Cards = () => {
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card mx-2" style={{ width: "18rem", minHeight: "30rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;