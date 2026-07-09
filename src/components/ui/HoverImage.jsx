function HoverImage({ src, alt }) {
  return (
    <div className="relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover transition duration-700 hover:scale-110"
      />
    </div>
  );
}

export default HoverImage;