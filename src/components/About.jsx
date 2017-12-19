import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
        <div style={{ paddingLeft: 30, marginBottom: 0 }}> 
          <p style={{ fontSize: 18, fontFamily: 'Helvetica' }} >
            Thanks for visiting my webpage.
          </p>
          <p style={{ fontSize: 18, fontFamily: 'Helvetica' }}>
I discovered my love for web development and coding as it challenges me to think critically and 
solve problems using diverse logical algorithms. And, most importantly it has infinite possibility to create 
great things!
          </p>
          <p style={{ fontSize: 18, fontFamily: 'Helvetica' }}>
I am passionate about writing clean, modular and maintainable codes.
          </p>

          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Proficient:</b> JavaScript, Angular, React, React-Native, ES6, Express, Node.JS, MongoDB, MySQL, Expo, jQuery, Git, Heroku, OAuth, CSS, Flexbox</p>
          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Experienced:</b> Backbone, Passport, R, Stata, CSS, Firebase, Sequelize, D3, Knex</p>

          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Education:</b> University of Wisconsin-Madison</p>
          <p style={{ fontFamily: 'Helvetica', color: '#333333' }}><b style={{ fontSize: 18 }}>Degree:</b> Bachelor of Science in Economics with Mathematical Emphasis</p>
        </div>
      </div>
    )
  }
}