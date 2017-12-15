import React, { Component } from 'react';

export default class Destination extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 30, marginRight: 100 }}><i><b>Destination</b></i></h2>
        <div style={styles.summary}>
          <h3 style={{ fontFamily: 'Trebuchet MS', fontSize: 16 }}>{`Travel application enabling users to customize each trip schedules according to different times and locations;
            particularly useful if users traveling to multi-countries as it automatically changes the time when location is selected`}
          </h3>

        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/4lDpy8M.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 0 }}>Stored user information in MongoDB database with Express-Session</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginTop: 0 }}>Authenticated login/signup with Facebook and </h4></li>              
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/Ain3thS.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 0 }}>Called and rendered saved trips from MongoDB database as user is logged in</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/d4HX5Bv.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 0  }}>Integrated GoogleMap API into application for clearer visualization</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginTop: 5 }}>Added auto-complete feature through GoogleMap API to find exact address</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/i3LFkKd.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 0  }}>Dropped and saved multiple pins on GoogleMap to easily visualize the entire travel</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginTop: 5 }}>Completed render feature as users might want to see the selected city</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/eA6JEnY.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginBottom: 0, marginTop: 0  }}>Added event feature to each city with foreign key</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS', marginTop: 5 }}>Implemented algorithm to filter all the events in each city by start time</h4></li>
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
    flexDirection: 'column',
    paddingRight: 100,
    paddingTop: 5
  },
  description: {
    borderWidth: 5,
    width: 675,
    marginTop: 0
  },
  image: {
    height: 400,
    width: 700,
    paddingTop: 30
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 100,
    width: 700
  }
}