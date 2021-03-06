import React, { Component } from 'react';

export default class NaturalHabitat extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 30, marginRight: 100 }}><i><b>Natural Habitat</b></i></h2>
        <div style={styles.summary}>
          <h3 style={{ fontFamily: 'Trebuchet MS', fontSize: 16 }}>{`Natural Habitat is a mobile application, created to empower people to form healthier habits in their daily activities. 
        Using its automated geolocation detecting feature, it reminds people to accomplish their planned tasks.
          `}
          </h3>
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
            <img src={'https://i.imgur.com/gTaTHgG.png?1'} style={styles.image} />
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
            <img src={'https://i.imgur.com/tcMdlLP.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Inserted hand-drawn clock images to show each task's starting time</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented dynamic animation for the remaining percentage of each task</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Added clickable gift feature through Facebook contact information, which can turn into random organism</h4></li>
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
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Authenticated user's personal information with OAuth2 to allow user's permission</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/kEgmXBX.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Checked the database to see whether each task has been imported</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Allowed a user to select specific location and category</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Allowed a user not to import specific task</h4></li>
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

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/rQvyJw4.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Allowed a user to observe other user's selected locations and completion points through Facebook contact</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Imported Facebook profile picture to show each user's profile</h4></li>
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
    marginTop: 50,
    width: 270
  },
  image: {
    height: 500,
    width: 400,
    paddingLeft: 30
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
    width: 700,
    paddingRight: 100,
  }
}