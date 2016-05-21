import { remote } from "electron";
import fs from 'fs';
import path from 'path';
import Immutable from 'immutable';
import uuid from 'node-uuid';

const configFileName = 'config.json';
const configFile = path.join(remote.app.getPath('userData'), configFileName);

const GET = 'PICKLER/CONFIG/GET';
const SAVE = 'PICKLER/CONFIG/SAVE';
const FAVORITES_ADD = 'PICKLER/CONFIG/FAVORITES/ADD';
const FAVORITES_SELECT = 'PICKLER/CONFIG/FAVORITES/SELECT';
const FAVORITES_REMOVE = 'PICKLER/CONFIG/FAVORITES/REMOVE';
const FAVORITES_TOUCH = 'PICKLER/CONFIG/FAVORITES/TOUCH';

const initialState = Immutable.fromJS({
	favorites: [], saving: false
});

export default function reducer(state = initialState, action = {}) {

	const {type, payload, error} = action;

  switch (type) {
    case GET:
			return state.merge(payload);
		break;
		case FAVORITES_ADD:
			return state.updateIn(['favorites'], favorites => favorites.push(
				Immutable.fromJS({
					label: payload.split('/')[2],
					selected: true,
					payload: {
						dsn: payload,
						uuid: uuid()
					}
				})
			));
		break;
		case FAVORITES_TOUCH:
		return state.set('favorites', state.get('favorites').map(item => {
			return item.set('selected', false);
		}));
		break;
		case FAVORITES_SELECT:
			return state.set('favorites', state.get('favorites').map(item => {
				if (item.getIn(['payload', 'uuid']) === payload.uuid) {
					return item.set('selected', true);
				} else {
					return item.set('selected', false);
				}
			}));
		break;
		case FAVORITES_REMOVE:
			return state.set('favorites', state.get('favorites').filter(item => {
				return item.getIn(['payload', 'uuid']) !== payload.uuid;
			}));
		break;
		case SAVE:
			if (!payload) {
				return state.set('saving', true);
			} else if (error) {
				return state.set('error', payload);
			} else {
				return state.set('saving', false);
			}
		break;
    default:
      return state;
  }
}

export function addToFavorites(dsn) {
  return function (dispatch, getState) {

    dispatch({
      type: FAVORITES_ADD,
      payload: dsn
    });

  }
}

export function touchFavorites() {
	return {
		type: FAVORITES_TOUCH
	}
}

export function save() {

	return async function(dispatch, getState) {
		dispatch({
			type: SAVE
		});
		try {
			await fs.writeFile(configFile, JSON.stringify(getState().config));
		} catch (e) {
			return dispatch({
				type: SAVE,
				error: true,
				payload: e
			})
		}

		dispatch({
			type: SAVE,
			payload: true
		})
	};

}

export function selectFavorite(payload) {
	return {
		type: FAVORITES_SELECT,
		payload: payload
	}
}

export function removeFavorite(payload) {
	return {
		type: FAVORITES_REMOVE,
		payload: payload
	}
}

export function getConfig() {

	var config;

	if (fs.existsSync(configFile)) {
		config = JSON.parse(fs.readFileSync(configFile));
	} else {
		config = initialState;
		fs.writeFileSync(configFile, JSON.stringify(initialState));
	}

  return {
    type: GET,
		payload: config
  }
}
