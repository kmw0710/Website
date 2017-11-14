import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    console.log('did it mount?')
  }

  render() {
    return(
      <div style={{ height: 500, backgroundColor: 'purple'}}>
        Home is rendering!
      </div>
    )
  }
}