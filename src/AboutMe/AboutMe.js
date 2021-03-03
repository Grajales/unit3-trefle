import React, { Component } from 'react';
import './AboutMe.css';
import ThreeAcorns from './Assets/three_acorns.jpg';
import Mark from './Assets/Mark.jpeg';
import Paula from './Assets/Paula.jpeg';
import Joseph from './Assets/Joseph.jpeg';
import Liliana from './Assets/Liliana.jpeg';
import Squirrel from './Assets/Squirrel.jpg';

class AboutMe extends Component {

  render() {
    // console.log(this.state)
    console.log('About Me here')
    return (
      <div>
        <main>
          <br></br>
          <div className='AboutMe-Intro-Div'>
            <h1 className='AboutMe-Intro-Hdr'>About Us</h1>
            <img src={ThreeAcorns} alt="" className='AboutMe-logo' />
            <img src={Squirrel} alt="" className='Squirrel-logo' />
            <br></br>
            <br></br>
            <p className='AboutMe-Intro'>
              This project has been a collaborative effort between the three cohorts/acorns below.
              <p>Through this project we have had the pleasure to work closely with Joseph/squirrel, 
              our instructor, </p>
              <p>who deserves special thanks for answering all our questions with
              a smile on his face. </p>
              <p>His knowledge, and humor, have helped each of us grow.</p>
              <br></br>
              <p>While none of us are Oaks at this point, we are, with time and encouagement growing.</p></p>
            <br></br>
          </div>
          <h2 className="AboutMe-Team-Hdr">Three Acorns and a Squirrel</h2>
          <br></br>
          <div className="AboutMe-Team">
            <div classname='AboutMe-Cohort'>
              <img src={Liliana} alt="" className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Liliana</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>
            <div classname='AboutMe-Cohort'>
              <img src={Paula} alt="" className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Paula</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>
            <div classname='AboutMe-Cohort'>
              <img src={Mark} alt="" className='AboutMe-Img' />
              <h2 className="AboutMe-Name">Mark</h2>
              <p className='AboutMe-bio'>my bio goes here</p>
            </div>

            <div classname='AboutMe-Instructor'>
              <img src={Joseph} alt="" className='AboutMe-Img' />
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