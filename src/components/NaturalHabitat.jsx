import React, { Component } from 'react';

export default class NaturalHabitat extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS' }}><i>Natural Habitat</i></h2>
        <div style={styles.summary}>
          <h2 style={{ fontFamily: 'Trebuchet MS', fontSize: 18 }}>{`
          My intended goal for this app is to help people build healthier habits based on location.
          To give easier access to its users, I decided to build it on mobile environment.
          `}
          </h2>
        </div>
        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/C84orUH.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }} style={{ fontFamily: 'Trebuchet MS' }}>Stored user information in MySQL database with byscript hash</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Authenticated login/signup with Facebook</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/GZ5hePv.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Integrated Firebase database to store personal picture taken from the mobile application</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Imported Facebook profile picture in order for user to easily setup profile</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Incorporated D3 and Art library with React-Native to visualize user's history with dynamic animations</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Inserted calendar strap to render selected date's tasks</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/7FIaeUB.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented GoogleMap through Expo to set a base location</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Allowed a user to pick multiple locations with tasks attached</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Completed geolocation feature to track user's current location</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/MjLwpIm.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Saved user's inputs in MySQL database with foreign keys in each table</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented a picker feature for easier selection for user</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/IiFPFqG.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented animation with Animation library in React-Native</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Added gift/observer features through Facebook friends</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Rendered different sizes of image based on user's completion points</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/EBagTuI.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented a draw navigation to provide easier access for the entire app</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/Kgrpqwg.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Integrated with Google Calender to import user's task/schedule into the application</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Generated pop-up using Expo to ask user's permission</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Authenticated user's personal information with Google OAuth2 to allow user's permission</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/VPl1Ac8.png?1'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Inserted an animated progress circle to show the current remaining time</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Allowed a user to set the timer in order to lock the mobile device</h4></li>
            </ul>
          </div>
        </div>


      </div>
    )
  }
}

const styles = {
  div: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingRight: 100,
    paddingTop: 30
  },
  description: {
    paddingLeft: 30,
    width: 350
  },
  image: {
    height: 500,
    width: 400,
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    width: 730
  }
}