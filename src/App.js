import React, { Component } from 'react';
import './App.css'
import User from './components/User';
import Counter from './components/Counter/Counter';

const App = () => {
  const user = {
    name: 'John',
    lastName: 'Doe',
    abstract: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    age: 30
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <User name={user.name} lastName={user.lastName} age={user.age} abstract={user.abstract} />
      </div>
      <div className="row mt-5">
        <Counter count={10} />
      </div>
    </div>
  )
}

export default App;