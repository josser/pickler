import pg from 'pg-promise';
import { pushState } from 'redux-router';

const CONNECTIONS_CONNECT = 'CONNECTIONS/CONNECT';
const CONNECTIONS_QUERY = 'CONNECTIONS/QUERY';
const initialState = {};

export default function reducer(state = initialState, action = {}) {
  const {type, payload, error, meta} = action;

  switch (type) {
    case CONNECTIONS_CONNECT:

      var newState = Object.assign({}, state);
      if (!error) {

        if (payload) {

          newState[meta] = {
            isConnecting: false,
            isSelected: true,
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
  return {
    type: CONNECTIONS_QUERY,
    payload: sql
  }
}

export function getConnection (dsn) {
  return async function(dispatch, getState) {
    dispatch({
      type: CONNECTIONS_CONNECT,
      meta: dsn
    });

    try {
      var payload = await pg()(dsn);
    } catch (e) {
      return dispatch({
        type: CONNECTIONS_CONNECT,
        error: true,
        meta: dsn,
        payload: e
      })
    }

    dispatch(pushState(null, '/db/' + dsn));

    return dispatch({
      type: CONNECTIONS_CONNECT,
      payload: payload,
      meta: dsn
    });
  }
}
