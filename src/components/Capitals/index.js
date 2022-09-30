import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {id: countryAndCapitalsList[0].id}

  changeOption = event => {
    this.setState({id: event.target.value})
  }

  render() {
    const {id} = this.state
    console.log(id)
    const filteredList = countryAndCapitalsList.find(each => each.id === id)

    return (
      <>
        <div className="container">
          <div className="card">
            <h1>Countries And Capitals</h1>
            <select id="capitals" value={id} onChange={this.changeOption}>
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" name="capitals">
              is capital of which country?
            </label>
            <h1>{filteredList.country}</h1>
            <p>designed by S@nju</p>
          </div>
        </div>
      </>
    )
  }
}
export default Capitals
