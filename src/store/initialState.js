
const fakeBusTime = {
  number: 0, bus: 'Mock data', time: '5 min', realtime: true,
};

const initialState = {
  bus: {
    loading: false,
    data: {
      glos: {
        to: [fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime],
        from: [fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime],
      },
      hest: {
        to: [fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime],
        from: [fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime, fakeBusTime],
      },
    },
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
