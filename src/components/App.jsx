import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Swiper, Slide } from 'react-dynamic-swiper';
// import 'react-dynamic-swiper/lib/styles.css';
import axios from 'axios';
import EachProject from './EachProject.jsx';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,
      author: '',
      quote: '',
      projects: ['Natural Habitat', 'Destination']
    }
  }

  componentDidMount() {
    axios.get('https://talaikis.com/api/quotes/random/')
      .then(result => {
        let { author, quote } = result.data;
        this.setState({ author, quote });
      })
  }


  getDescription() {

  }

  render() {
    return (
      <div style={{ marginBottom: 20 }}>
        {this.state.projects.map((ele, i) => {
          return <EachProject key={i} name={ele} index={i} />
        })}
        {/* <div style={styles.quote}>
          <h3 style={{ fontFamily: "Courier", color: '#1a3300' }}>
            <i><b>{this.state.author}</b></i>
          </h3>
          <h4 style={{ fontFamily: 'Courier', color: '#1a3300', fontSize: 20 }}>
            {this.state.quote}
          </h4>
        </div> */}
      </div>
    )
  }
}

const styles = {
  quote: {
    display: 'flex',
    height: 150,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
    width: 730,
  }
}