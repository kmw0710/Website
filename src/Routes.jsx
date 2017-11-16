import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

import App from './components/App.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import NaturalHabitat from './components/NaturalHabitat.jsx';
import Destination from './components/Destination.jsx';
// import linkedin from '../public/assets/Linkedin.png';

export default class Routes extends Component {

  render() {
    return (
      <Router>
        <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
          <div style={styles.top}>
          <div style={{ marginLeft: 50 }}>
            <img src={'https://i.imgur.com/WHgPMPV.jpg'} style={{ height: 90, width: 90, paddingLeft: 30 }} />
          </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={styles.info}>
                  <h2 style={{ color: '#fff2e6', marginBottom: 0, fontFamily: 'Trebuchet MS', fontSize: 40 }}>
                    Minwoo Kim
                  </h2>
                  <h4 style={{ color: '#fff2e6', marginTop: 0, fontFamily: 'Trebuchet MS' }}>
                    <i>Fullstack Software Engineer</i>
                  </h4>
              </div>
            </div>
            <div style={styles.contact}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginRight: 50 }}>
                <div style={{ color: '#fff2e6', fontFamily: 'Trebuchet MS' }}>
                  (734) 277-2590
                </div>
                <div style={{ color: '#fff2e6', fontFamily: 'Trebuchet MS' }}>
                  kminwoo0710@gmail.com
                </div>
              </div>
              <a href='http://linkedin.com/in/kminwoo'>
                <img style={styles.image} src={'https://i.imgur.com/F5Eqch4.png'} />
              </a>
              <a href="https://github.com/kmw0710?tab=repositories">
                <img style={styles.image} src={'https://i.imgur.com/7v0TbcI.png'} />
              </a>
            </div>
          </div>
          <div style={styles.middle}>
            <div style={styles.navbar}>
              <Link to='/' replace><p style={{ fontFamily: 'Helvetica' }}>Home</p></Link>
              <Link to='/about' replace><p style={{ fontFamily: 'Helvetica' }}>About</p></Link>
            </div>
          <div style={{ flex: 8, paddingBottom: 30 }}>
          <Route exact path='/' component={App} />
          <Route path='/about' component={About} />
          <Route path='/naturalhabitat' component={NaturalHabitat} />
          <Route path='/destination' component={Destination} />
          </div>
          </div>
          <div style={styles.bottom}>
            <h4 style={{ color: '#fff2e6', fontFamily: 'Trebuchet MS' }}>
              Created using React by Minwoo Kim
            </h4>
          </div>
        </div>
      </Router>
    )
  }
}

const styles = {
  image: {
    width: 40,
    height: 40,
    marginLeft: 10
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4b4b34',
    flex: 2
  },
  middle: {
    display: 'flex',
    backgroundColor: '#ffffff'
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 50,
    flex: 1
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
    flex: 0.6,
    backgroundColor: '#ddd',
    paddingLeft: 30,
    
  },
  info: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4b4b34' 
  }
}