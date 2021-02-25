import React from 'react'
import "./Footer.scss"
import P5sketch from '../P5sketch/P5sketch'
import { getRandomP5sketch } from '../../utils/P5utils'
import p5sketches from '../P5sketch/_sketches/_sketches'

const Footer = () => {
  return (
    <footer className="Footer">
      <section className="Footer-Signature">
        <a href="https://jusellier.com" rel="noreferrer" target="_blank">This website was coded with love by JuSellier</a>
      </section>

      <P5sketch autoPlay titleHidden controlsHidden {...getRandomP5sketch(p5sketches)} />      
    </footer>
  )
}

export default Footer
