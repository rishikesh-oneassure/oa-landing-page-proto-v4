const CustomLink = ({ href, children, style = "", target, rel }) => {
  return (
    <a href={href} className={style} target={target} rel={rel}>
      {children}
    </a>
  );
};

export default CustomLink;
