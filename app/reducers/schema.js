import pg from 'pg-promise';
import immutable from 'immutable';

const initialState = immutable.fromJS([
  {label: 'Catalogs', payload: {uuid: '0001', component: 'Dummy'}},
  {label: 'Schemas', payload: {uuid: '0002', component: 'Dummy'}},
  {label: 'Event Triggers', payload: {uuid: '0003', component: 'Dummy'}},
  {label: 'Extensions', payload: {uuid: '0004', component: 'Dummy'}},
  {label: 'Query Editor', payload: {uuid: '0005', component: 'QueryEditor'}}
])

const LOAD_TABLES = 'PICKLER/SCHEMA/LOAD_TABLES';
const SCHEMA_ITEM_SELECT = 'PICKLER/SCHEMA/ITEM_SELECT';

export default function reducer(state = initialState, action = {}) {

  const {type, payload, error, meta} = action;

  switch (type) {
    case LOAD_TABLES:
      return state;
    break;
    case SCHEMA_ITEM_SELECT:
      return state.map(item => {
        if (item.getIn(['payload', 'uuid']) === payload.uuid) {
          return item.set('selected', true);
        } else {
          return item.set('selected', false);
        }
      });
    break;
    default:
      return state;
  }

};

export function selectSchemaItem(payload) {

	return {
		type: SCHEMA_ITEM_SELECT,
		payload: payload
	}

}

export function load(payload) {
  return async function(dispatch, getState) {

    const state = getState();
    var connection = state.connections[state.connections.current];

  };
}
