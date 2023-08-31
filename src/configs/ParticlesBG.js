import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import ParticlesConfig from '@configs/particlesjs-config'

export default function Particlesbg(){

  const loadParticles = async (main) => await loadFull(main)

  return(
    <div style={{zIndex: 1}}>
      <Particles 
      id="tsparticles"
      init={loadParticles}
      options={ParticlesConfig}/>
    </div>
  )
}