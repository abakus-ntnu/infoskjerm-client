
// Actions
const UPDATE = 'UPDATE';

// Reducer
const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, { input: action.widget });
    default: return state;
  }
};


// Action Creators
export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export default reducer;
