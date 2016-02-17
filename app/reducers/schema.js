import pg from 'pg-promise';
import immutable from 'immutable';

const defaultSchema = immutable.fromJS([
  {'label': 'Catalogs'},
  {'label': 'Schemas'},
  {'label': 'Event Triggers'},
  {'label': 'Extensions'}
])

const initialState = immutable.fromJS({});

export default function reducer(state = initialState, action = {}) {

  const {type, payload, error, meta} = action;

  switch (type) {
    case LOAD_TABLES:
      return state;
    break;
    default:
      return state;
  }

};

export function load(payload) {
  return async function(dispatch, getState) {

    const state = getState();
    var connection = state.connections[state.connections.current];
    
  };
}
