import starboy_logo from './starboy_logo.png';

export function Logo(){
  return(
    <div>
      <div className='flex flex-start'>
        <img src={starboy_logo} alt="Starboy Logo" style={{height:200, marginTop:0}}></img>
      </div>
    </div>
  )
}
