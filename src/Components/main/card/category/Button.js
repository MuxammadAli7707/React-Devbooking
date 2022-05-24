import React from 'react';
import './Category.scss'

function Buttons(props) {

  const filterHandler = (e) => {
    if(e.target.id === "Temuriylar davri"){
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      }))
    } else if(e.target.id === "Jadid adabiyoti") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    } else if(e.target.id === "Sovet davri") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    } else if(e.target.id === "Mustaqillik davri") {
      props.setNewArr(props.obj.filter(item => {
        return item.cate === e.target.id;
      })) 
    }
  }
  return (
    <>
      <li className="category__item">
        <button onClick={filterHandler} 
        className="category__btn activ"
        id={props.id}
        >
          {props.item}
        </button>
      </li>
    </>
  );
}

export default Buttons;