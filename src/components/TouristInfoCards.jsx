import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="d-flex justify-content-around">
      <div className="card">
        <img src="https://picsum.photos/200" className="card-img-top" />
        <div className="card-body">
          <h1>Glasgow</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            repudiandae architecto fugit molestias veritatis minima beatae!
            Ipsum obcaecati in blanditiis.
          </p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img src="https://picsum.photos/200" className="card-img-top" />
        <div className="card-body">
          <h1>Manchester</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            repudiandae architecto fugit molestias veritatis minima beatae!
            Ipsum obcaecati in blanditiis.
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src="https://picsum.photos/200" className="card-img-top" />
        <div className="card-body">
          <h1>London</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
            repudiandae architecto fugit molestias veritatis minima beatae!
            Ipsum obcaecati in blanditiis.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
