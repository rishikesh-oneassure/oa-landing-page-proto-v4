const SectionContainer = ({ children, className = "", id }) => {
  return (
    <div
      className={`w-full max-w-7xl mb-12 md:mb-14 mx-auto px-6 md:px-0 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
