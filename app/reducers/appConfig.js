const APP_CONFIG_GET = 'APP/CONFIG/GET';

const initialState = {
	favorites: []
};

export default function reducer(state = initialState, action = {}) {

  const {type, payload} = action;

  switch (type) {
    case APP_CONFIG_GET:
      return state;
    default:
      return state;
  }
}

export function getConfig() {
  return {
    type: APP_CONFIG_GET
  }
}
