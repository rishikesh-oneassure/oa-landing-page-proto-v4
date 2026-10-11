const Container = ({ children, navSpacing = true, className = "" }) => {
  return (
    <div
      className={`max-w-7xl my-0 mx-auto px-4 md:px-0 ${
        navSpacing ? "overflow-hidden" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
