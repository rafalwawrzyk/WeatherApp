import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchWeather} from '../actions/index'

import {bindActionCreators} from 'redux'



class SearchBar extends Component{
  constructor(props){
    super(props)

    this.state = {
      term:''
    }
  }


  onInputChange(event){
    this.setState({
      term:event.target.value
    })
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term:''})
  }

  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
          <input
            placeholder="Forecast for your fav city"
            onChange={this.onInputChange.bind(this)}
            value={this.state.term}
            className="form-control"/>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>

      </div>

    )
  }
}



function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch)
}















export default connect(null,mapDispatchToProps)(SearchBar);
