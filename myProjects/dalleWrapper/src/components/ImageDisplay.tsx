interface Props {
  imageUrl: string;
}

const ImageDisplay: React.FC<Props> = ({ imageUrl }) => {
  return (
    <>
      <div className="mt3">
        <img src={imageUrl} alt="Image" width="auto" />
        {/* {console.log(imageUrl)} */}
      </div>
    </>
  );
};

export default ImageDisplay;
