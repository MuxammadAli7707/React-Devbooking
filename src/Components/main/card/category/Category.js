import React from "react";
import { Link } from "react-router-dom";
import Buttons from "./Button";
import "./Cards.scss";
import "./Category.scss";

function Category(props) {
  let categoryArr = [
    "Temuriylar davri ",
    "Jadid adabiyoti",
    "Sovet davri",
    "Mustaqillik davri",
  ];
  let typeArr = [
    "Temuriylar davri",
    "Jadid adabiyoti",
    "Sovet davri",
    "Mustaqillik davri",
  ];
  return (
    <>
      <ul className="category d-flex">
        {categoryArr.map((item, i) => {
          return (
            <Buttons
              key={i}
              item={item}
              obj={props.obj}
              id={typeArr[i]}
              newArr={props.newArr}
              setNewArr={props.setNewArr}
            />
          );
        })}
      </ul>

      <ul className="cards d-flex">
        {props.newArr.map((item, i) => {
          return (
            <>
              <Link className="category__link" to={`Adiblar/${item.id}`}>
              <li key={i} className="cards__item">
                <div className="cards__imgbox">
                  <img className="cards__img" src={item.img} alt={item.name} />
                </div>
                <div className="cards__box d-flex flex-column align-items-center">
                  <h3 className="cards__title">{item.name}</h3>
                  <p className="cards__year">
                    {item.birth}-{item.dead}
                  </p>

                  <div className="cards__seenbox d-flex justify-content-between align-items-center">
                    <p className="cards__seen">
                      <i className="bx bxs-book-alt cards__book"></i>34
                    </p>
                    <p className="cards__seen">
                      <i className="bx bx-headphone cards__hphone"></i> 13
                    </p>
                  </div>
                </div>
              </li>
              </Link>
              
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Category;
