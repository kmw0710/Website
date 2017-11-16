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
// import linkedin from '../public/assets/Linkedin.png';

export default class Routes extends Component {

  render() {

    return (
      <Router>
        <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
          <div style={styles.top}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginLeft: 125 }}>
                <img src={'https://i.imgur.com/WHgPMPV.jpg'} style={{ height: 80, width: 65 }} />
              </div>
              <div style={styles.info}>
                  <h2 style={{ color: '#ffeecc', marginBottom: 5 }}>
                    Minwoo Kim
                  </h2>
                  <h4 style={{ color: '#ffeecc', marginTop: 5 }}>
                    <i>Fullstack Software Engineer</i>
                  </h4>
              </div>
            </div>
            <div style={styles.contact}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginRight: 50 }}>
                <div>
                  (734) 277-2590
                </div>
                <div>
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
              <Link to='/' style={styles.button} replace>Home</Link>
              <Link to='/about' style={styles.button} replace>About</Link>
              {/* <Link to='/projects' style={styles.button} replace>Projects</Link> */}
              <Link to='/contact' style={styles.button} replace>Contact</Link>
            </div>
          <div style={{ flex: 8, backgroundColor: '' }}>
          <Route exact path='/' component={App} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          </div>
          </div>
          <div style={styles.bottom}>
            <h4 style={{ color: '#ffeecc' }}>
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
    backgroundColor: '#003333',
    flex: 2
  },
  middle: {
    display: 'flex',
    backgroundColor: '#ffe6b3'
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
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'red'
  },
  button: {
    marginTop: 30
  },
  info: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003333' 
  }
}