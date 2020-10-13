import React from "react"

// import MyJumbo from "../components/myJumbo/MyJumbo"
// import MyButton from "../components/myButton/MyButton"

import "../../fontawesome/css/all.min.css"
import "./AboutMe.css"

import { Container, Row, Col } from "react-bootstrap"

const AboutMe = props => {
  return (
    
      <Container fluid>
        <h3 id = "About" class = "about_me_h1">About Me</h3>

        <br/>
        
          <p>
          I've had a lifelong interest in computers and technology in general, which eventually led me to take up programming.
          After a period of self-teaching and exploring the opportunities that software engineering can create, I enrolled in the Fullstack Academy immserive program to advance my web development skills.
          </p>

          <br/>

          <p>
          Previously, I worked in hospitality where I gained invaluable experience and excelled performing in high pressure environments. 
          I enjoyed working with and serving a vastly diverse crowd, as well as taking opportunities to mentor my colleagues.      
          </p>

          <br/>

          <p>
          Technologies I'm proficient with include Javascript and the PERN stack (Postgres, Express, React, Node), HTML, and CSS. 
          I am also comfortable with a number of the services offered by Firebase such as Cloud Firestore. 
          Technologies I'm gaining familiarity with include React Native and the ViroReact AR platform.
          </p>

          <br/>

          <p>
          I have many varied interests (music and the arts, travel, food, hospitality) and I’m excited to apply my programming skills in these areas and beyond.
          My work ethic, attention to detail, and collaborative nature make me a great fit on any engineering team.
          
          </p> 
          
      </Container>

  )
}

export default AboutMe