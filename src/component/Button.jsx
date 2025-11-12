 
const Button = ({ text, className, id, href }) => {
  const handleClick = (e) => {
    e.preventDefault(); // Stop the link from jumping instantly

    if (href) {
      // If href is provided, scroll to that section
      const target = document.querySelector(href);
      if (target) {
        const offset = window.innerHeight * 0.15; // Leave a bit of space at the top
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (id) {
      // Fallback to old behavior for backward compatibility
      const target = document.getElementById(id);
      if (target) {
        const offset = window.innerHeight * 0.15;
        const top =
          target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;