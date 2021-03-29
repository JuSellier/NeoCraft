import React from 'react'
import "./About.scss"
import BasePage from '../../components/BasePage/BasePage'

const About = () => {
  return (
    <BasePage>
    <div className="About">
      <h1>About NeoCraft</h1>
      <p className="left-line-p">NeoCraft is an initiative from Julien Sellier aimed at promoting artistic usage of technology.</p>

      <h2>Follow the Instagram account</h2>
      <p className="left-line-p">
        If you want to discover more algorithmic artworks, feel free to view our instagram.
        </p>
        <a className="btn-link" href="https://www.instagram.com/neocraft.art/" rel="noreferrer noopener">
        Click here to check out NeoCraft on instagram.
        </a>
    </div>
    </BasePage>
  )
}

export default About
