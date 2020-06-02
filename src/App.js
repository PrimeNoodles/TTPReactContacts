import React, { Component } from 'react';
import Contacts from './Contacts';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Contacts
          name = "Opachki"
          mobile = "7183629473"
          work = "8004372802"
          email = "opahchiki@email.com"
        />
          <Contacts
          name = "Angry Man"
          mobile = "9172197402"
          work = "9172197402"
          email = "reallyangry@email.com"
        />
          <Contacts
          name = "Liu Kai Wen"
          mobile = "1231231234"
          work = "5567929238"
          email = "afriendofafriend@email.com"
        />
          <Contacts
          name = "Gregorian Chant"
          mobile = "9578769117"
          work = "2847265837"
          email = "imustsayno@email.com"
        />
          <Contacts
          name = "BearDog"
          mobile = "3672448553"
          work = "4567967934"
          email = "dogandbear@email.com"
        />
      </>
    );
  }
}

export default App;
