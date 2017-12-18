import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', paddingTop: 80 }}>
        <div style={{ paddingLeft: 30, marginBottom: 0 }}>
          <p style={{ fontSize: 18, marginTop: 0 }} >Thanks for visiting my webpage.
I discovered my love for web development and coding as it challenges to think critically, 
solve problems through diverse logical algorithms, and infinite possibility to create great things!
I am passionate about writing clean, modular and maintainable codes</p>

          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Proficient:</b> JavaScript, Angular, React, React-Native, ES6, Express, Node.JS, MongoDB, MySQL, Expo, jQuery, Git, Heroku, OAuth, CSS, Flexbox</p>
          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Experienced:</b> Backbone, Passport, R, Stata, CSS, Firebase, Sequelize, D3, Knex</p>

          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Education:</b> Bachelor of Science at University of Wisconsin-Madison</p>
          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Degree:</b> Economics with Mathematical Emphasis</p>

        </div>
      </div>
    )
  }
}