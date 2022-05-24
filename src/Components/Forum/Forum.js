import React from 'react';
import './Forum.scss'
import imag from '../../assets/images/Two factor authentication-pana 1.svg';
import { Link } from 'react-router-dom';
function Forum() {
  return (
    <div className='forum d-flex'>  
      <div className='forum__imgbox'>
        <img src={imag} alt={imag} />
      </div>
      <div className='forum__info'>
        <div className='forum__signup'>
          <h2 className='forum__title'>Sign up</h2>
          <span className='forum__text'>Already have an account?
          <Link to={'/nazm'} className='forum__next'>Sign in</Link>
          </span>
        </div>
        <form className='forum__reg'>
          <input className='forum__input' type="text" placeholder='First name' required />
          <input className='forum__input' type="text" placeholder='Last name' required />
          <input className='forum__input' type="number" placeholder='Phone' required />
          <input className='forum__input' type="email" placeholder='Email' required />
          <input className='forum__input' type="password" placeholder='Password' required />
          <button className='forum__btn'>Next step</button>
        </form>  
      </div>
    </div>
  );
}

export default Forum;