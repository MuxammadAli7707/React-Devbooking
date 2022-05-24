import React from "react";
import './Search.scss'
import searchicon from '../../../assets/images/search-icon.svg'
import obj from "../object/objects";

function Search(props) {

  let temp = [];
  const searchHandler = (e) => {
    obj.map((item, i) => {
      if(item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())) {
        temp.push(item);
      }

    })
    props.setNewArr(temp) 
  }
  return(
    <div className="search d-flex flex-column align-items-center">
      <h2 className="search__title">Qidirsh</h2>
      <div className="serach__form d-flex align-items-center">
        <input onChange={searchHandler} className="search__input" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
        <button className="search__btn"> <img src={searchicon} alt="search-icon" /> Izlash</button>
      </div>

    </div>
  )
}
export default Search