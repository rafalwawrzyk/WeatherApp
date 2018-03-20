import React,{Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/Chart'
import GoogleMap from '../components/google_map'



class WeatherList extends Component{



  renderWeather(cityData){
    const name = cityData.city.name;
    // const lat = cityData.city.coord.lat;
    // const lon = cityData.city.coord.lon;
    const {lon,lat} = cityData.city.coord // znajdz obiekt
    // coord i wyciagnij z niego lon i lat i dodaj do zmiennych
    // lon i lat
    console.log(cityData)
    const tempArray = cityData.list.map((elem) => {
      return elem.main.temp
    })
    const pressureArray = cityData.list.map((elem) => {
      return elem.main.pressure
    })
    const humidityArray = cityData.list.map((elem) => {
      return elem.main.humidity
    })
    return(
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td>
          <Chart data={tempArray} color="red" units="K" height={150} width={150}/>
        </td>
        <td>
          <Chart data={pressureArray} color="blue" units="hPa" height={150} width={150} />
        </td>
        <td>
          <Chart data={humidityArray} color="green" units="%" height={150} width={150} />
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>

      </table>
    )
  }
}


function mapStateToProps(state){
  return{
    weather:state.weather
  }
}














export default connect(mapStateToProps)(WeatherList)
