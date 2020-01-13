import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimleHero>
      <Banner
        title="continua explorando"
        info=" La vida está llena de aventuras no te quedes encerrado mientra ella pasa."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimleHero>
    <About />
    <Services />
  </Layout>
)
