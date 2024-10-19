import "./ImageDisplay.css";

export default function ImageDisplay({ imageUrl }) {
  return (
    <>
      <div className="mt3">
        <img src={imageUrl} alt="Image" width="auto" />
        {/* {console.log(imageUrl)} */}
      </div>
    </>
  );
}
