import React, { useState, useEffect } from "react";
import './Main.scss'
import Search from "./search/Search";
import obj from './object/objects';
import Category from "./card/category/Category";

function Main() {
  const [newArr, setNewArr] = useState([]);

  useEffect(() => {
    setNewArr(obj);
  }, []);
  
  return(
    <div className="mains">
    <main>
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search 
            obj={obj}
            newArr={newArr}
            setNewArr={setNewArr}
          />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category 
            obj={obj}
            newArr={newArr}
            setNewArr={setNewArr}
          />
        </section>
      </div>
    </main>
    </div>
  )
}

export default Main