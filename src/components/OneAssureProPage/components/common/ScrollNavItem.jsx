function ScrollNavItem({ label, targetId, offsetPx = 120, className }) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - offsetPx;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {label}
    </button>
  );
}

export default ScrollNavItem;
