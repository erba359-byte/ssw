import React, { Component } from 'react'
import Funccounter from './component/Funccounter'
import Classcounter from './components/Classcounter'

export default class App extends Component {
  state={
    count:11
  }
  render() {
    return (
      <div>
    <Funccounter num={this.state.count}/>
        <hr/>
        <Classcounter/>


       
      </div>
    )
  }
}
