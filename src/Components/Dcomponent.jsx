import React, { Component } from 'react';
import Fcomponent from '../Components/Fcomponent';


export default class Dcomponent extends Component {
      constructor(props) {
    super(props);
    this.state = {
        name: 'Button not pressed',
 
      };
      this.updateData = this.updateData.bind(this);
    };
    updateData(value) {
        this.setState({
            name: value
        })
    }
      render() {
        return (
        <div>
            
            <p>State: {this.state.name}</p>
            <Fcomponent updateData={this.updateData}/>
        </div>
      )
    };
  };

 