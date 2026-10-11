const SectionContainerMedium = ({ children, className = "", id }) => {
  return (
    <div
      className={`w-full max-w-5xl mb-12 md:mb-14 px-6 md:px-0 mx-auto ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainerMedium;
