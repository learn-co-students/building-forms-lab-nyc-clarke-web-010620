import React, { Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  render() {
    console.log(this.props.bands)
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <br /><br />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: band => dispatch({ type: "ADD_BAND", payload: band })
//   } 
// }

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band: band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
