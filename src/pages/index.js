import React from "react"
import Layout from "../components/layout/Layout"

import Hero from "../components/hero/Hero"
import Summary from "../components/summary/Summary"
import Projects from "../components/projects/Projects"
import AboutMe from "../components/AboutMe/AboutMe"

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default () => (
  <div className="App">
    <Layout>
      <br/>
      <Hero />
      <br/>
      <br/>
      <br/>
      <hr />
      <AboutMe />
      <br/>
      <br/>
      <hr />
      <Projects />
      <br/>
      <hr />
      <Summary />
      <hr />
    </Layout>
  </div>
)
