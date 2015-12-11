import { app } from "remote";
import fs from 'fs';
import path from 'path';
import Immutable from 'immutable';

const GET = 'PICKLER/CONFIG/GET';

const initialState = Immutable.fromJS({
	favorites: [
		{
			title: 'local/josser-debian'
		}
	]
});

export default function reducer(state = initialState, action = {}) {

	const {type, payload} = action;

  switch (type) {
    case GET:
			return state.merge(payload);      
    default:
      return state;
  }
}

export function getConfig() {
	const configFileName = 'config.json';
	const configFile = path.join(app.getPath('userData'), configFileName);
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
