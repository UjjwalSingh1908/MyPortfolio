import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import "./Background.css"


const Background = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 800 ,
            minWidth: 100,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x28292d
          })
      );
    }
    return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }, [vantaEffect]);

    return (
      <div ref={vantaRef} className="bg" >

      </div>
    )
}

export default Background