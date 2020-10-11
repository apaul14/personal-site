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

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

export default () => (
  <div className="App">
    <Layout>
      <br/>
      <Hero />
      <br/>
      <br/>
      <hr />
      <br/>
      <br/>
      <AboutMe />
      <br/>
      <br/>
      <hr />
      <br/>
      <br/>
      <br/>
      <br/>
      <Projects />
      <br/>
      <br/>
      <hr />
      <br/>
      <Summary />
      <hr />
    </Layout>
  </div>
)
