import React, { Component } from 'react';
import { Link } from 'react-router';

export default class EachProject extends Component {
  render() {
    return (
      <div style={styles.project}>
        <div style={{ flex: 10, display: 'flex', flexDirection: 'row', marginTop: 30, justifyContent: 'space-between' }}>


          <div style={{ flex: 8, backgroundColor: 'purple' }}>
            <div>
              <h4 style={{ textAlign: 'center' }}><i>{this.props.name}</i></h4>
            </div>
            {this.props.index === 0 ? (
              <div style={styles.picture}>
                {/* <img src={'https://i.imgur.com/C84orUH.png'} style={styles.image} /> */}
                <img src={'https://i.imgur.com/IiFPFqG.png'} style={styles.image} />
                {/* <img src={'https://i.imgur.com/GZ5hePv.png'} style={styles.image} /> */}
              </div>
            ) : this.props.index === 1 ? (
              <div style={styles.picture}>
                <img src={'https://i.imgur.com/C84orUH.png'} style={styles.image} />
                <img src={'https://i.imgur.com/IiFPFqG.png'} style={styles.image} />
                <img src={'https://i.imgur.com/GZ5hePv.png'} style={styles.image} />
              </div>
            ) : null}
          </div>
          {this.props.index === 0 ? (
            <div style={styles.description}>
              <ul>
                <li>IOS/Andorid application using React-native</li>
                <li>Authenticated Login/Signup with Facebook OAuth</li>
                <li>Authenticated user’s data with OAuth2 to import personal schedules from Google Calendar</li>
                <li>Integrated Firebase database to store personal picture taken from the mobile application</li>
                <li>Incorporated D3 and Art library with React-Native to visualize user's data with dynamic animations</li>
              </ul>
            </div>
          ) : this.props.index === 1 ? (
            <div style={styles.description}>
            <ul>
              <li>Integrated Google Maps API for accurate location, and provided clearer view of the entire travel</li>
              <li> dest</li>
              <li> destinat </li>
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
    height: 400,
    width: 400,
    backgroundColor: '#ffe6b3',
    marginLeft: 30
  },
  picture: {
    display: 'flex',
    flexDirection: 'row',
    flex: 6,
    backgroundColor: 'yellow',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  description: {
    flex: 5,
    backgroundColor: 'green',
    marginRight: 100
  },
  image: {
    height: 160,
    width: 140
  }
}