import React, { Component } from 'react'
import './App.css';
import Countries from './components/countries.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []

    }
  }

  getVirus = () => {
    console.log('death')
    fetch(`https://who-watches-the-watchmen.herokuapp.com/coronas/country/`)
      .then(response => response.json())
      .then(data => this.setState({countries: data}))
      .catch((error)=> {
        console.log('ERROR', error)
      })
  }

  render() {
    console.log('infected', this.state.countries)
    return (


      <div >
        <button onClick={()=> this.getVirus()}>Viral Load</button>
        <Countries
          countries={this.state.countries}
        
        
        />   
      </div>
    )
  }
}

export default App;