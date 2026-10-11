const MobileCarouselItem = ({ children, className = "" }) => {
  return (
    <div
      className={`flex w-[calc(100vw-54px)] flex-shrink-0 justify-center ${className}`}
    >
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MobileCarouselItem;
