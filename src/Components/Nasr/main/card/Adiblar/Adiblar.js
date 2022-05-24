import React from "react";
import { useLocation } from "react-router-dom";
import "./Adiblar.scss";

function Adiblar({ newObj }) {
  let location = useLocation();

  return (
    <div className="writers">
      <div className="container">
        {newObj.map((item, i) => {
          if (item.id == location.pathname.split("/").at(-1)) {
            return (
              <div
                key={i + 98}
                className="writers__main d-flex justify-content-between"
              >
                <div className="writers__leftbox">
                  <div className="writers__imgbox">
                    <img
                      className="writers__img"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>

                  <div className="d-flex justify-content-evenly align-items-center">
                    <div className="">
                      <p className="writers__born">Tavallud sanasi</p>
                      <p className="writers__birth">5-Avg {item.birth}</p>
                      <p className="writers__born">Toshkent, Uzbekistan</p>
                    </div>
                    <span className="writers__birth">-</span>
                    <div className="">
                      <p className="writers__born">Tavallud sanasi</p>
                      <p className="writers__birth">24-MAY {item.dead}</p>
                      <p className="writers__born">Toshkent, Uzbekistan</p>
                    </div>
                  </div>
                </div>
                <div className="writers__infobox">
                  <h2 className="writers__title">{item.name}</h2>
                  <p className="writers__desc">{item.desc}</p>
                  <h3 className="writers__creation">
                    <i className="bx bxs-bookmark writers__bookmark"></i> Ijod
                  </h3>
                  <p className="writers__creation-text">{item.works}</p>
                  <div className="writers__worksbox d-flex justify-content-between align-items-center">
                    <h3 className="writers__work">Asarlari</h3>
                    <a className="writers__workall" href="/">
                      Barchasini ko'rish
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Adiblar;
