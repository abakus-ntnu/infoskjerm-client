import initialState from '../initialState';

const NEXT_COMPONENT = 'NEXT_COMPONENT';

const animationReducer = (state = initialState.animation, action = {}) => {
  switch (action.type) {
    case NEXT_COMPONENT:
      return Object.assign({},
        state,
        {
          currentIndex: (state.currentIndex + 1) % state.components.length,
          currentComponent: state.components[state.currentIndex],
        });
    default: return state;
  }
};


export function fetchNextComponent() {
  return { type: NEXT_COMPONENT };
}


export default animationReducer;
