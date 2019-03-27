const initialState = {
  bus: {
    loading: false,
    data: { to: { glos: [], prof: [] }, from: { glos: [], prof: [] } },
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
    currentComponent: 'bus',
  },
};

export default initialState;
