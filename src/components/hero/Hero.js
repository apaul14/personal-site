// import React from "react"
// import { Jumbotron } from "react-bootstrap"
// import me from "../../images/me.png"

// //import custom styles
// import "./hero.css"
// import SocialRow from "../SocialRow/SocialRow"

// const Hero = () => (
//   <Jumbotron style={jumbo_styles} className="jumbo" fluid>
//     <div className="jumbo_content">
//       <h1>Hi, I'm Alex, Software Engineer and Web Developer based in New York.</h1>
//       <br />
//       <h3>
//         Right now I'm using Javascript, Node.js, React.js and Gatsby.js to
//         design and hack noice websites together on the internet.
//       </h3>
//       <img 
//         src = {me}
//         alt = {"sup"}
//       />
//       <p>Have a project you'd like to discuss?</p>
//       <p>
//         Let's chat{" "}
//         <a href="mailto:john.doe@gmail.com">
//           <span style={{ color: "blueviolet" }}>john.doe@gmail.com</span>
//         </a>
//       </p>
//     </div>
//     <div>
//       <SocialRow />
//     </div>
//   </Jumbotron>
// )

// const jumbo_styles = {
//   backgroundColor: "#fff",
//   paddingLeft: "1rem",
// }

// export default Hero

import React from "react"
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap"
import me from "../../images/me.png"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"


const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {<h1>Hello, I'm Alex, Software Engineer and Web Developer based in New York.</h1>}
          </Col>
          <Col  xs={6} md={4}>
            <Image
              src = {me}
              alt = "me"
              fluid/>
          </Col>
        </Row>  
      </Container>    
      {/* <h3>
        Right now I'm using Javascript, Node.js, React.js and Gatsby.js to
        design and hack noice websites together on the internet.
      </h3> */
      <p>Have a project you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:john.doe@gmail.com">
          <span style={{ color: "blueviolet" }}>john.doe@gmail.com</span>
        </a>
      </p> */}
      <br />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero


