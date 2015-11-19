import { app } from "remote";
import fs from 'fs';
import path from 'path';

const APP_CONFIG_GET = 'APP/CONFIG/GET';

const initialState = {favorites: [
	{
		title: 'local/josser-debian'
	}
]};

export default function reducer(state = initialState, action = {}) {

	const {type, payload} = action;

  switch (type) {
    case APP_CONFIG_GET:
			state = payload;
      return state;
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
    type: APP_CONFIG_GET,
		payload: config
  }
}
