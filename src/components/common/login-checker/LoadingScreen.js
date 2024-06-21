import React from 'react';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (<>
    <div className="d-flex justify-content-center mt-3"> 
      <div className="spinner-grow text-success spinner-size-xl" role="status">
      </div>
    </div>
    <div className="d-flex justify-content-center mt-3"> 
      <h1 className='text-light'>Automata bejelentkezés</h1>
    </div>
  </>);
}