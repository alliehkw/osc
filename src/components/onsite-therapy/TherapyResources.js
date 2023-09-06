function TherapyResources({ tagline, images }) {
  const imageBlock = images.map((image, index) => {
    return (
      <div className="therapy-image" key={index}>
        <img
          src={image.therapyResourceImage.mediaItemUrl}
          alt={image.therapyResourceImage.altText}
        />
      </div>
    );
  });
  return (
    <div className="therapy-resources-container">
      <h2>{tagline}</h2>
      <div className="therapy-images">{imageBlock}</div>
    </div>
  );
}
export default TherapyResources;
