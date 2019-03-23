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
  home: {
    loading: false,
    data: [{ path: '/bus', name: 'Bus', Component: Bus }],
  },
};

export default initialState;
