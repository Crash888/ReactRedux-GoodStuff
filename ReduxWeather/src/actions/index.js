import axios from 'axios';

//  Need to define this file and get a key to work
import { API_KEY } from './api_key';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	//  'request' is a Promise
	const request = axios.get(url);

	//  Promise is passed here.  
	//  When promise is passed then middleware comes in, stops the
	//  action.  When the promise is resolved send a new action
	//  and send that to the reducers.
	//  'redux-promise' deals with this
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}
