import Tilt from 'react-parallax-tilt';
import starboy_logo from './starboy_logo.png';

export function Logo(){
  return(
    <>
        <Tilt>
            <div>
              <img src={starboy_logo} alt="Starboy Logo" style={{height: '200px'}}></img>
            </div>
        </Tilt>
    </>
  )
}
