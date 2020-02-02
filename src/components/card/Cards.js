import React from "react";
import "./cards.css";

const Cards = ({ info }) => {
  return (
    <div className="cardsContainer">
      {info.map((course, id) => {
        return (
          <div key={id} className="card">
            <div className="credits_container_all">
              <img
                src={`https://mytablemesa.com${course.imageUrl}`}
                alt="Course"
                className="courseImg"
              />
              <span className="__credits_container">
                <p className="credits-txt">
                  {course.maximumCredits <= 1
                    ? `${course.maximumCredits} CREDIT`
                    : `${course.maximumCredits} CREDITS`}
                </p>
              </span>
            </div>

            <article className="description_container">
              <strong className="course_name">{course.name}</strong>
              <p className="course_provider">{course.provider.name}</p>
            </article>

            <div className="price_rating_container">
              <p className="course_price">
                {course.price === 0 ? "FREE" : `$ ${course.price}`}
              </p>
              <p>estrellas</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
