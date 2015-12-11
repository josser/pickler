import pg from 'pg-promise';
import { pushState } from 'redux-router';

const CONNECT = 'PICKLER/CONNECTIONS/CONNECT';
const QUERY = 'PICKLER/CONNECTIONS/QUERY';
const QUERY_REQUESTED = 'PICKLER/CONNECTIONS/QUERY_REQUESTED';

const initialState = {
  newQueryRequested: false,
  current: '',
  lastResults: [],
  lastError: null
};

export default function reducer(state = initialState, action = {}) {
  const {type, payload, error, meta} = action;

  switch (type) {
    case QUERY:
      if (!error) {
        if (payload) {
          console.log('connection query with payload', payload);
          return Object.assign({}, state, {
            newQueryRequested: false,
            lastResults: payload
          })
        } else {
          console.log('connection query no payload');
          return Object.assign({}, state, {
            newQueryRequested: false
          })
        }

      } else {
        console.log('connection query with error', payload);
        return Object.assign({}, state, {
          lastError: payload
        })
      }

    break;
    case QUERY_REQUESTED:
      return Object.assign({}, state, {
        newQueryRequested: true
      })
    break;
    case CONNECT:

      var newState = Object.assign({}, state);
      if (!error) {

        if (payload) {

          newState.current = meta;
          newState[meta] = {
            isConnecting: false,
            db: payload
          }

          return newState;
        } else {

          newState[meta] = {
            isConnecting: true
          }

          return newState;

        }
      } else {
        newState[meta] = {
          isConnecting: false,
          isSelected: false,
          error: payload
        }
      }

      return newState;
      break;
    default:
      return state;
  }
}

export function query (sql) {

  return async function (dispatch, getState) {
      dispatch({
        type: QUERY
      });

      var state = getState();
      var db = state.connections[state.connections.current].db;
      try {
        var results = await db.query(sql);
      } catch (e ) {
        return dispatch({
          type: QUERY,
          error: true,
          meta: sql,
          payload: e
        })
      }

      return dispatch({
        type: QUERY,
        payload: results
      })
  }

}

export function getQuery () {
  return {
    type: QUERY_REQUESTED
  }
}

export function getConnection (dsn) {
  return async function(dispatch, getState) {
    dispatch({
      type: CONNECT,
      meta: dsn
    });

    try {
      var payload = pg()(dsn);
      await payload.query('select version()');
    } catch (e) {
      return dispatch({
        type: CONNECT,
        error: true,
        meta: dsn,
        payload: e
      })
    }

    dispatch(pushState(null, '/db/' + dsn));

    return dispatch({
      type: CONNECT,
      payload: payload,
      meta: dsn
    });
  }
}
