export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND' :
      console.log(action.payload)
      return { bands: state.bands.concat(action.band) } 
    default :
      return state;
  }
};
