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

  shouldComponentUpdate() {
    return false;
  }

  getDescription() {
 
  }


  render() {
    let random = ['red', 'blue', 'yellow', 'green', 'purple', 'brown', 'orange']
    let randomColor = random[Math.floor(Math.random())]
    return (
      <div>
      {this.state.projects.map((ele, i) => {
        return <EachProject key={i} name={ele} index={i} />
      })}
        
        <div style={styles.quote}>
          <h3 style={{ fontFamily: "Lucida Console" }}>
            <i>{this.state.author}</i>
          </h3>
          <h2 style={{ fontFamily: 'Comic Sans MS' }}>
            {this.state.quote}
          </h2>
        </div>
      </div>
    )
  }
}

const styles = {
  contact: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  button: {
    marginTop: 30
  },
  quote: {
    display: 'flex',
    height: 150,
    backgroundColor: '#ffe6b3',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: 100,
    paddingLeft: 100,
    paddingTop: 50,
    paddingBottom: 50
  }
}