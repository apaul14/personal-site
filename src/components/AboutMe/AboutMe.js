import React from "react"

// import MyJumbo from "../components/myJumbo/MyJumbo"
// import MyButton from "../components/myButton/MyButton"

import "../../fontawesome/css/all.min.css"
// import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

const AboutMe = props => {
  return (
    
      <Container fluid>
        <h1 class = "about_me_h1">About Me</h1>
        <Row>
          <p>
          I've had a lifelong interest in computers and technology in general, which recently led me to take up programming.
          After a period of self-teaching and exploring the opportunities that software engineering creates, I enrolled in Fullstack Academy to advance my web development skills.
          </p>

          <br/>

          <p>
          Previously, I worked in hospitality where I gained invaluable experience and excelled performing in high pressure environments. 
          I enjoyed working with and serving a vastly diverse crowd, as well as taking opportunities to mentor my colleagues.      
          </p>

          <br/>

          <p>
          Technologies I'm now proficient with include Javascript and the PERN stack (Postgres, Express, React, Node), HTML, and CSS. 
          I am also comfortable with a number of the services offered by Firebase such as Cloud Firestore. 
          Technologies I'm gaining familiarity with include React Native and ViroReact AR platform.
          </p>

          <br/>

          <p>
          I have many varied interests (music and the arts, travel, food, hospitality) and I’m excited to apply my programming skills in these areas.
          I think my work ethic, attention to detail, and collaborative nature make me a great fit on any engineering team.
          
          </p> 
        </Row>
      </Container>

  )
}

export default AboutMe