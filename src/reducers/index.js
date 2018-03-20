import {combineReducers} from 'redux'
import WeatherReducer from './reducer_weather'


const mainReducer = combineReducers({
  weather: WeatherReducer
})


export default mainReducer
