import React, { Component } from 'react'


class Countries extends Component {
    constructor(props) {
      super(props)
      
      
    }
  
  
    
  
    render() {
        console.log('!', this.props.countries)
      return ( <div>
          {
              this.props.countries.map(country=> {
                  console.log(country)
                return (
                   
                    <div class="table-responsive">
                    <table class="table table-dark table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Country</th>
                    <th scope="col">Total Infected</th>
                    <th scope="col">Total Deaths</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>{country.Country}</td>
                    <td>{country.TotalConfirmed}</td>
                    <td>{country.TotalDeaths}</td>
                  </tr>
                 
                  
                </tbody>
              </table>
              </div>
             
                )
              })
            }
  
  
            </div>
      )
    }
  }














export default Countries