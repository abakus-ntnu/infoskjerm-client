import axios from 'axios';

const FETCH_BUS_BEGIN = 'FETCH_BUS_BEGIN';
const FETCH_BUS_SUCCESS = 'FETCH_BUS_SUCCESS';
const FETCH_BUS_FAILURE = 'FETCH_BUS_FAILURE';


const busReducer = (state = { loading: false, data: [], error: false }, action = {}) => {
  switch (action.type) {
    case FETCH_BUS_BEGIN:
      return Object.assign({}, state, { loading: true });
    case FETCH_BUS_SUCCESS:
      console.log(action.data);
      return Object.assign({}, state, { data: action.bus, loading: false });
    case FETCH_BUS_FAILURE:
      return Object.assign({}, state, { error: true, loading: false });
    default: return state;
  }
};

export default busReducer;


export function fetchBusBegin() {
  return { type: FETCH_BUS_BEGIN };
}

export function fetchBusSuccess(bus) {
  return { type: FETCH_BUS_SUCCESS, bus };
}

export function fetchBusFailure(error) {
  return { type: FETCH_BUS_FAILURE, error };
}


export function fetchBus() {
  return (dispatch) => {
    dispatch(fetchBusBegin());
    axios.get('http://infoskjerm-api.koskom.no/bus')  // Should be URL to bus-api
      .then((response) => {
        dispatch(fetchBusSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchBusFailure(error));
      });
  };
}
