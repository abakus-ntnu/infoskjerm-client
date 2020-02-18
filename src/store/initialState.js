const initialState = {
  bus: {
    loading: false,
    data: { glos: { to: [], from: [] }, hest: { to: [], from: [] } },
    error: false,
  },
  events: {
    loading: false,
    data: [],
    error: false,
  },
  animation: {
    components: ['bus', 'events', 'signup'],
    currentIndex: 0,
    currentComponent: 'signup',
  },
};

export default initialState;
