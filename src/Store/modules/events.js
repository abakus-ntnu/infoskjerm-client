import axios from 'axios';

const FETCH_EVENTS_BEGIN = 'FETCH_EVENTS_BEGIN';
const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';

const reducer = (
  state = { loading: false, data: [], error: false },
  action = {},
) => {
  switch (action.type) {
    case FETCH_EVENTS_BEGIN:
      return Object.assign({}, state, { loading: true });
    case FETCH_EVENTS_SUCCESS:
      return Object.assign({}, state, { data: action.events, loading: false });
    case FETCH_EVENTS_FAILURE:
      return Object.assign({}, state, { error: true, loading: false });
    default:
      return state;
  }
};

export default reducer;

export function fetchEventsBegin() {
  return { type: FETCH_EVENTS_BEGIN };
}

export function fetchEventsSuccess(events) {
  return { type: FETCH_EVENTS_SUCCESS, events };
}

export function fetchEventsFailure(error) {
  return { type: FETCH_EVENTS_FAILURE, error };
}

export function fetchEvents() {
  return (dispatch) => {
    dispatch(fetchEventsBegin());
    axios
      .get('https://jowies.com/api/events')
      .then((response) => {
        dispatch(fetchEventsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchEventsFailure(error));
      });
  };
}
