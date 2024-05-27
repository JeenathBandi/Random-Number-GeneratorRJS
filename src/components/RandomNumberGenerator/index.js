// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerateRanNumber = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    return this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="btn"
            onClick={this.onGenerateRanNumber}
          >
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
