import React from 'react'
import './App.css'
import {Route} from 'react-router'
import Wallet from './components/Wallet'
import LinkForm from './components/LinkForm';
import Collection from './components/Collection'

function App() {
  return (
    <div className="App">
      <nav>Welcome to WhatCanIBuy</nav>
      <Wallet></Wallet>
      <LinkForm></LinkForm>
      <Collection></Collection>
    </div>
  )
}

export default App
