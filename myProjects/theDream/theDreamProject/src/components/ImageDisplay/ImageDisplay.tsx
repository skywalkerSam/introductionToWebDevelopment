import './ImageDisplay.css'

export default function ImageDisplay({ imageUrl }) {
    return(
        <>
            <div>
                <img src={imageUrl.imageUrl} alt="Image" width="auto"/>
                {/* {console.log(imageUrl)} */}
            </div>
        </>
    )
}

