import Tilt from 'react-parallax-tilt';
import starboyLogo from '../../assets/starboy_logo.png';

export function Logo(){
  return(
    <>
        <Tilt>
            <div>
              <img src={starboyLogo} alt="Starboy Logo" style={{height: '200px'}}></img>
            </div>
        </Tilt>
    </>
  )
}
