import thePicture from './1.jpg'

export const FaceRecognition = ({ imageUrl }) => {
    return(
        <div className="center">
            <img 
            src={imageUrl} 
            alt="Not Found!" 
            className='mr3'
            style={{width:600, height:'auto', marginTop:6}}
            />
        </div>
    );
} 

// https://cdna.artstation.com/p/assets/images/images/067/669/592/large/blu1304-rey-045.jpg?1695918402
