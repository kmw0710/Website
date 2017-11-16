import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: 500, backgroundColor: '#ffffff', paddingTop: 30 }}>


        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginLeft: 50 }}>
            <img src={'https://i.imgur.com/KxoQUii.jpg'} style={{ height: 300, width: 270 }} />
          </div>
          <div>
            <ul>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Name: Minwoo Kim</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Job: Fullstack software engineer</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Phone: (734) 277-2590</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>E-mail: kminwoo0710@gmail.com</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Homepage: http://minwoo.herokuapp.com</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Education: Bachelor of Science at University of Wisconsin-Madison</h3>
              <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Degree: Economics with Mathematical Emphasis</h3>
            </ul>
          </div>
        </div>
        <div style={{ paddingLeft: 30, paddingTop: 30 }}>
          <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Proficient: JavaScript, Angular, React, React-Native, ES6, Express, Node.JS, MongoDB, MySQL, Expo, Git, OAuth, HTML5, Flexbox</h3>
          <h3 style={{ fontFamily: 'Monaco', color: '#333333' }}>Experienced: Backbone, Passport, R, Stata, CSS, HTML, jQuery, FireBase, Sequelize, D3, Knex</h3>
          <h4 style={{ fontFamily: 'Monaco', color: '#333333' }}> I enjoy solving problems, integrating technologies, and writing code that is clean, modular, and maintainable. 
          I also enjoy working with others, absorbing new ideas, and collectively building great things.</h4>
        </div>
      </div>
    )
  }
}