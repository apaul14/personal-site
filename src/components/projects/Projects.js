import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/Project_Card_Pic.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      
      <h2 class="Projects"> Latest Projects</h2>
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
        // date={"Dec 2019"}
        description={
          "Augmented Reality Mobile App. Allows users to create, share, and take AR tours without GPS making it ideal for indoor/hard to track spaces"
        }
        techStack = {['PostGreSQL','Node.js','Express','React Native', 'Viro React', 'Redux']}
        sourceURL={"https://github.com/Thunkaroos/YellowBrickRoad"}
        //hostedURL={"http://www.google.com"}
        demoVideo={"https://www.youtube.com/watch?v=qAMLpsmQKNo&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=22&t=0s"}
      />
      <ProjectCard
        imageSrcPath={image}
        title={"Rolling Schones"}
        description={
          "Mock e-commerce site for a ficticious bakery. Yum!"
        }
        techStack = {['PostGreSQL','Node.js', 'Express','React', 'Redux']}
        sourceURL={"https://github.com/1909-Cookie-Monsters/rolling-scones"}
        hostedURL={"http://therollingscones.herokuapp.com/home"}
        //demoVideo={"https://www.youtube.com/watch?v=qAMLpsmQKNo&list=PLx0iOsdUOUmnTCO5wLzNNeaLbbZLlngp6&index=22&t=0s"}
      />
      
      {/* <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link> */}
    </Container>
  </React.Fragment>
)

export default Projects
