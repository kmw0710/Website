import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EachProject extends Component {
  render() {
    return (
      <div style={styles.project}>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
          <div style={{ height: 300, width: 300, backgroundColor: 'purple' }}>
            {this.props.index === 0 ? (
              <div style={styles.picture}>
                <Link to='/naturalhabitat'>
                  <img src={'https://i.imgur.com/84ANUaL.png?1'} style={styles.image} />
                </Link>
              </div>
            ) : this.props.index === 1 ? (
              <div style={styles.picture}>
                <Link to='/destination'>
                  <img src={'https://i.imgur.com/4lDpy8M.png'} style={styles.image} />
                </Link>
              </div>
            ) : null}
          </div>
          {this.props.index === 0 ? (
            <div style={styles.description}>
              <Link to='/naturalhabitat'>
                <h2 style={styles.name}><i>{this.props.name}</i></h2>
              </Link>
              <ul>
                <li style={styles.bullet}><p>IOS/Android mobile application</p></li>
                <li style={styles.bullet}><p>Native application using React-Native</p></li>
                <li style={styles.bullet}><p>Facebook authentication</p></li>
                <li style={styles.bullet}><p>Google OAuth2 authentication</p></li>
                <li style={styles.bullet}><p>React-Native, Expo, Express, Node, MySQL, Firebase</p></li>
              </ul>
            </div>
          ) : this.props.index === 1 ? (
            <div style={styles.description}>
              <Link to='/destination'>
                <h2 style={styles.name}><i>{this.props.name}</i></h2>
              </Link>
              <ul>
                <li style={styles.bullet}><p>Web browser based application</p></li>
                <li style={styles.bullet}><p>JavaScript application using React</p></li>
                <li style={styles.bullet}><p>Facebook, Passport authentication</p></li>
                <li style={styles.bullet}><p>GoogleMap RESTful API</p></li>
                <li style={styles.bullet}><p>React, Express, Node, MongoDB, Bootstrap</p></li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}


const styles = {
  project: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingLeft: 70
  },
  description: {
    height: 300,
    width: 300,
    paddingLeft: 30
  },
  image: {
    height: 300,
    width: '100%'
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Trebuchet MS',
    marginRight: 30
  },
  bullet: {
    margin: -4,
    fontFamily: 'Trebuchet MS',
    fontSize: 14
  }
}