import React, { useState, useEffect} from 'react'
import "./P5sketch.scss"
import Sketch from 'react-p5';
import { getWindowWidth, getWindowHeight, resizeSketchOnWindowResize } from '../../utils/P5utils';
import { CgPlayButton } from 'react-icons/cg';

const P5sketch = ({sketchData, setupFunc, drawFunc, title = "P5sketch", description, titleHidden = false, autoPlay = false, controlsHidden = false, borders = true}) => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(autoPlay);

  useEffect(() => {
    setLoading(false)
  }, [])

  let {...data} = sketchData;
  console.log(data);
  
  const setup = (p5, canvasParentRef) => {
    setupFunc(p5, data);
    p5.createCanvas(getWindowWidth(), getWindowHeight()).parent(canvasParentRef);
  }

  const draw = (p5) => {
    drawFunc(p5, data);
  }

  return (
    <section className="P5sketch">
    {
      (!titleHidden && !loading) && 
      <h3 className="P5sketch-Title contained">{title}</h3>
    }
    <div className="P5sketch-wrapper" style={{boxShadow: `0 0 0 1px ${(borders && playing) ? "var(--clr-txt)" : "transparent"}`}}>
      {loading ?
        <div className="P5sketch-Loading">Loading {title}...</div>
        :
          playing ?
          <Sketch setup={setup} draw={draw} windowResized={resizeSketchOnWindowResize} />
          :
          <div className="P5sketch-Play" onClick={() => setPlaying(true)}>
            <CgPlayButton />
            Run code
          </div>
      }
    </div>
    </section>
  )
}

export default P5sketch
