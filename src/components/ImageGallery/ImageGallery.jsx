import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items }) => {
  return (
    <ul class="gallery">
      {items.map(item => {
        return <ImageGalleryItem name={item.tags} />;
      })}
    </ul>
  );
};

export default ImageGallery;
