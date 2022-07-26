import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import General from './components/General';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();

    this.state = []
  }

  handleSumbission = (e) => {
    e.preventDefault()
    const cv = document.querySelector('#cv-info')
    const cvElements = Array.from(cv.elements);
    cvElements.forEach(input => {
      if (input) {
        console.log(input.name + ' ' + input.value);
      } else {
        console.log('Empty');
      }
      
    })
  }

  render() {
    return <div className = 'parent-div'>
            <Navbar/>
            <form id = 'cv-info' onSubmit = {this.handleSumbission}>
            <div className='submission-div'>
              
              <div className='section-div'>
                <General title = 'General' />
              </div>
                <Summary title = 'Summary'/>
              <div className = 'section-div'>
                <button className='new-button'>+</button>
                <Education title = 'Education'/>
              </div>
              <div className='section-div'>
                <button className='new-button'>+</button>
                <Experience title = 'Experience'/>
              </div>

              <button type = {'submit'} className = 'submit-button' form='cv-info'>Submit Resume</button>
            </div>
            </form>

            <Footer />

    </div>
  }
}

export default App;
