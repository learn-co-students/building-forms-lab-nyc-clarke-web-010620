import React, { Component } from 'react';

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="band">Band Name:</label>
            <div>
              <input type="text" name="band" value={this.state.name}
                onChange={this.handleChange} />
            </div>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput;
