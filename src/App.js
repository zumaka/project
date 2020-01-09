import React from 'react';
import './App.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Singers from "./Singers/Singers";
import Discography from "./Discography/Discography";
import Contact from "./Contact/Contact";
import { Element  } from "react-scroll";

const App=()=> {
  return (
    <div>
      <Header />
      <Element name='main'>
      <Main />
      </Element>
      <Element name='singers'>
      <Singers />
      </Element>
        <Element name='discography'>
      <Discography/>
      </Element>
        <Element name='contact'>
      <Contact/>
        </Element>
    </div>
  );
}

export default App;
