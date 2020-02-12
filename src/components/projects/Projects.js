import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/cabin.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <br/>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"Yellow Brick Road"}
        date={"Dec 2019"}
        description={
          "Augmented Reality Mobile App. Allows users to create, share, and take AR tours without GPS making it ideal for indoor/hard to track spaces"
        }
        techStack = {['PostGreSQL','Node.js','React Native', 'Viro React', 'Redux']}
        sourceURL={"https://github.com/Thunkaroos/YellowBrickRoad"}
        //hostedURL={"http://www.google.com"}
        demoVideo={"https://www.youtube.com/watch?v=qAMLpsmQKNo&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=22&t=0s"}
      />
      {/* <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link> */}
    </Container>
  </React.Fragment>
)

export default Projects
