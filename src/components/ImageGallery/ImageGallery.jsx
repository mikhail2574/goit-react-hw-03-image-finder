import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, setSrc, setModal }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className="ImageGallery">
      {items.map(item => {
        return (
          <ImageGalleryItem
            src={item.webformatURL}
            key={item.id}
            tags={item.tags}
            largesrc={item.webformatURL}
            setSrc={setSrc}
            setModal={setModal}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
