import React,{Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
  render(){
    console.log(this.props.weathers)
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.weathers.map(weather => {
              return(
                <tr key = {weather.city.id}>
                  <td>{weather.city.name}</td>
                </tr>
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