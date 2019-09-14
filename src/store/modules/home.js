import initialState from '../initialState';

const RENDER_NEXT_SCREEN = 'RENDER_NEXT_SCREEN';


const homeReducer = (state = initialState.home, action = {}) => {
  switch (action.type) {
    case RENDER_NEXT_SCREEN:
      return Object.assign({}, state, { loading: true });
    default: return state;
  }
};

export default homeReducer;


export function setTransition(start) {
  return {
    type: 'START_TRANSITION',
    start,
  };
}
//TODO implement this
