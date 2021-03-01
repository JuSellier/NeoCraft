import React from 'react'
import BasePage from '../../components/BasePage/BasePage'
import "./Home.scss"
import P5sketch from '../../components/P5sketch/P5sketch'

import p5sketches from "../../components/P5sketch/_sketches/_sketches"
import { getRandomP5sketch } from '../../utils/P5utils'

const Home = () => {
  return (
    <BasePage>
    <section className="Home-Intro">
      <h1>NeoCraft codes algorithmic art.</h1>
      <P5sketch autoPlay titleHidden controlsHidden noBorder {...getRandomP5sketch(p5sketches)} />      
    </section>

    <section className="Home-Description contained">
	    <h2>What is NeoCraft?</h2>
	      <p className="left-line-p">
          It is a collaborative art project focused on providing artistic experiences
          using code.
          <br />
          NeoCraft is an initiative from FoxiDev.io.
        </p>
	    <a href="/about" className="btn-link">About NeoCraft</a>
    </section>

    <section className="contained">
      <h2>Discover some artworks.</h2>
    </section>

    <div className="Home-Artworks">
      {
        p5sketches.map((sketch, index) => {
          return (
            <P5sketch key={index} {...sketch} />
            )
          })
        }
    </div>
  </BasePage>
  )
}

export default Home
