const ImageGalleryItem = ({ src, id }) => {
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItem-image" src={src} alt="" id={id} />
    </li>
  );
};

export default ImageGalleryItem;
