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
                  <img src={'https://i.imgur.com/IiFPFqG.png'} style={styles.image} />
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
              <div>
                <h2 style={{ textAlign: 'center' }}><i>{this.props.name}</i></h2>
              </div>
              <Link to='/naturalhabitat'>
                <ul>
                  <h4>IOS/Android mobile application</h4>
                  <h4>Native application using React</h4>
                  <h4>Facebook authentication</h4>
                  <h4>Google OAuth2 authentication</h4>
                  <h4>React-Native, Expo, Express, Node, MySQL, Firebase</h4>
                </ul>
              </Link>
            </div>
          ) : this.props.index === 1 ? (
            <div style={styles.description}>
              <div>
                <h2 style={{ textAlign: 'center' }}><i>{this.props.name}</i></h2>
              </div>
              <Link to='/naturalhabitat'>
                <ul>
                  <h4>Web browser based application</h4>
                  <h4>JavaScript application using React</h4>
                  <h4>Facebook authentication</h4>
                  <h4>GoogleMap RESTful API</h4>
                  <h4>React, Express, Node, MongoDB</h4>
                </ul>
              </Link>
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
    width: 300
  },
  image: {
    height: 300,
    width: '100%'
  }
}