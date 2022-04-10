import './App.css';
import React from 'react';
import totoro from './totoro.jpg';
// import styles from './style.css';



function App() {
  return (
    <>
      <div style={{border:"solid 1px black",maxWidth:'1080 px'}}>

        <h1 className="title">Your name here</h1>

        <br />

        <img src={totoro} alt='totoroImg'/>

        <br />

        <img src="/Hayao.jpg" />

      </div>

      <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" />

      </video>
    </>

    
    
  );
}

export default App;
