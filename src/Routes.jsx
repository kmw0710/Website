import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory();

import App from './components/App.jsx';
import Home from './components/Home.jsx';
// import linkedin from '../public/assets/Linkedin.png';

export default class Routes extends Component {

  render() {

    return (
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={styles.top}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginLeft: 125 }}>
                <img src={'https://i.imgur.com/WHgPMPV.jpg'} style={{ height: 80, width: 65 }} />
              </div>
              <div style={styles.info}>
                <div style={{ backgroundColor: 'red' }}>
                  <h2>
                    Minwoo Kim
                  </h2>
                </div>
                <div style={{ backgroundColor: 'green' }}>
                  <h4>
                    Fullstack Software Engineer
                  </h4>
                </div>
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
          <Route exact path='/' component={App} />
          <Route path='/home' component={Home} />
          <div style={styles.bottom}>
            <h4>
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
    height: 100,
    backgroundColor: '#003333',
    flex: 2
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 50,
    height: 100,
    flex: 8
  },
  info: {
    fontColor: '#ffffb3',
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'blue',
    justifyContent: 'flex-start'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'blue' 
  }
}