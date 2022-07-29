import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import General from './components/General';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './Footer';
import CV from './components/CV';


class App extends Component {
  constructor() {
    super();

    this.state = {
      info: [],
      edForm: 1,
      exForm: 1
    }
  }

  handleSumbission = (e) => {
    e.preventDefault()
    const cv = document.querySelector('#cv-info')
    const cvElements = Array.from(cv.elements);
    cvElements.forEach(input => {
      if (input.name === 'button') {
        console.log('Ignore Button');
      } else {
        this.setState({
          info: this.state.info.push(input.value)
        })
      }
      
    })

    cv.classList.add('hidden')

    console.log(this.state);
  }

  handleImage = (e) => {
    let picInput = document.querySelector('#profilePic')
    picInput.click()
  }

  addEducation = () => {
    this.setState({
      edForm: this.state.edForm + 1
    })
  }

  addExperience = () => {
    this.setState({
      exForm: this.state.exForm + 1
    })
  }

  render() {
    const edForms = []
    const exForms = []

    for (let i = 0; i < this.state.edForm; i++) {
      edForms.push(<Education key = {i} number = {i} />)
    }

    for (let i = 0; i < this.state.exForm; i++) {
      exForms.push(<Experience key = {i} number = {i} />)
    }

    return <div className = 'cv-div'>
              {/* <div className = 'parent-div'>
            <Navbar/>
            <form id = 'cv-info' className = 'cv-info' onSubmit = {this.handleSumbission}>
            <div className='submission-div'>
              
              <div className='section-div'>
                <General title = 'General' handleImage = {this.handleImage} />
              </div>
                <Summary title = 'Summary'/>

              <div className = 'section-div'>
                <button type = 'button' name = 'button' onClick = {this.addEducation} className='new-button'>+</button>
                <h2>Education</h2>
                {edForms}
              </div>
              
              <div className='section-div'>
                <button type = 'button' name = 'button' onClick = {this.addExperience} className='new-button'>+</button>
                <h2>Experience</h2>
                {exForms}
              </div>

              <button name = 'button' type = {'submit'} className = 'submit-button' form='cv-info'>Submit Resume</button>
            </div>
            </form>

            <Footer />

            </div> */}

            <CV />
          </div>
  }
}

export default App;
