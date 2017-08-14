import React,{Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

  renderChart(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key = {cityData.city.id}>
        <td>{cityData.city.name}</td>
        <td>
          <Chart height={120} width={180} data={temps} color="green" units="K" />
        </td>
        <td>
          <Chart height={120} width={180} data={pressures} color="yellow" units="hPa"/>
        </td>
        <td>
          <Chart height={120} width={180} data={humidities} color="black" units="%"/>
        </td>
      </tr>
    )

  }

  render(){
    console.log(this.props.weathers)
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
          {
            this.props.weathers.map(weather => {
              return(
                this.renderChart(weather)
              )
            })
          }
        </tbody>
      </table>
    )
  }

}

function mapStateToProps(state){
  return{
    weathers : state.weathers
  }
}

export default connect(mapStateToProps)(WeatherList);
