import React, { Component } from 'react';
import './AboutMe.css';
import ThreeAcorns from './Assets/three_acorns.jpg';
import Mark from './Assets/Mark.jpeg';
import Paula from './Assets/Paula.jpeg';
import Joseph from './Assets/Joseph.jpeg';
import Liliana from './Assets/Liliana.jpeg';

class AboutMe extends Component {

  render() {
    // console.log(this.state)
    console.log('About Me here')
    return (
      <div>
        <main>
          <div className='AboutMe-Intro-Div'>
            <h1 className='AboutMe-Intro-Hdr'>Three Acorns</h1>
            <img src={ThreeAcorns} alt="three acorns image" className='AboutMe-logo' />
            <p className='AboutMe-Intro'>
              This project has been a collaborative effort between the three cohorts/acorns below.
              <p>Through this project we have had the pleasure to work closely with Joseph, our instructor, who
              deserves special thanks for answering all our questions with a smile on his face.
              His knowledge, and humor, have helpded each of us grow.</p>
              <p>While none of us are Oaks at this time, we are, with time and encouagement growing.</p></p>
          </div>
          <h2 className="AboutMe-Team-Hdr">It Takes a Team</h2>
          <div className="AboutMe-Team">
            <div classname='AboutMe-Cohort'>
              <img src={Liliana} className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Liliana</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>
            <div classname='AboutMe-Cohort'>
              <img src={Paula} className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Paula</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>
            <div classname='AboutMe-Cohort'>
              <img src={Mark} className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Mark</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>

            <div classname='AboutMe-Instructor'>
              <img src={Joseph} className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Joseph</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default AboutMe;