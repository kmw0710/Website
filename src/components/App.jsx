import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Swiper, Slide } from 'react-dynamic-swiper';
// import 'react-dynamic-swiper/lib/styles.css';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0,
      author: '',
      quote: ''
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
      <div>
        <div style={styles.div}>
          <div style={{ flex: 10, display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'space-around' }}>
          
            <Link onClick={() => {this.getDescription()}} style={styles.projects} to='/home'>
            </Link>
            <div style={{ flex: 1, backgroundColor: 'orange', marginRight: 100 }}>
            </div>
          
          </div>
          <div style={styles.bottomDiv}>
            <Button style={styles.button}><Link to='/home'>PROJECTS</Link></Button>
          </div>
        </div>
        <div style={styles.quote}>
          <h3>
            {this.state.author}
          </h3>
          <h2>
            {this.state.quote}
          </h2>
        </div>
      </div>
    )
  }
}

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column',
    height: 500,
    backgroundColor: '#ffe6b3'
  },
  projects: {
    flex: 1,
    backgroundColor: 'yellow',
    marginLeft: 100 
  },
  bottomDiv: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 80,
    alignSelf: 'center'
  },
  button: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  },
  quote: {
    display: 'flex',
    height: 200,
    backgroundColor: 'brown',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}