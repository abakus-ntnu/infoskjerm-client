const initialState = {
  bus: {
    loading: false,
    data: { to: { glos: [], prof: [] }, from: { glos: [], prof: [] } },
    error: false,
  },
  events: {
    loading: false,
    data: { to: { glos: [], prof: [] }, from: { glos: [], prof: [] } },
    error: false,
  },
};

export default initialState;
