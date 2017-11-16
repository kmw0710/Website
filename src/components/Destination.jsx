import React, { Component } from 'react';

export default class Destination extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center', fontFamily: 'Trebuchet MS' }}><i>Natural Habitat</i></h2>
        <div style={styles.summary}>
          <h2 style={{ fontFamily: 'Trebuchet MS' }}>{`
            My intended goal for this app is to provide an application where user is able to customize their travel by location.
            User can attach events to each location under entire trip.
          `}
          </h2>

        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/4lDpy8M.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }} style={{ fontFamily: 'Trebuchet MS' }}>Stored user information in MongoDB database with Express-Session</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Authenticated login/signup with Facebook</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/Ain3thS.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Called and rendered saved trips from MongoDB database as user is logged in</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/d4HX5Bv.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Integrated GoogleMap API into application for clearer visualization</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Added auto-complete feature through GoogleMap API to find exact address</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/i3LFkKd.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Dropped and saved multiple pins on GoogleMap to easily visualize the entire travel</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Completed render feature as users might want to see the selected city</h4></li>
            </ul>
          </div>
        </div>

        <div style={styles.row}>
          <div>
            <img src={'https://i.imgur.com/eA6JEnY.png'} style={styles.image} />
          </div>
          <div style={styles.description}>
            <ul>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Added event feature to each city with foreign key</h4></li>
              <li><h4 style={{ fontFamily: 'Trebuchet MS' }}>Implemented algorithm to filter all the events in each city by start time</h4></li>
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
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30
  },
  description: {
    paddingTop: 160,
    paddingLeft: 50,
    borderWidth: 5,
  },
  image: {
    height: 500,
    width: 400,
  },
  summary: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
    paddingBottom: 30
  }
}