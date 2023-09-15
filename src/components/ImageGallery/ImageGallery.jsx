import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';

const ImageGallery = ({ items }) => {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <ul className="ImageGallery">
      {items.map(item => {
        return <ImageGalleryItem src={item.webformatURL} key="{item.id}" />;
      })}
    </ul>
  );
};

export default ImageGallery;
