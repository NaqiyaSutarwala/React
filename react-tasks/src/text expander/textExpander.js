import "./textExpanderStyles.css";
import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 20,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1F09CD",
  expanded = false,
  className = "box",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(expanded);

  const displayText = isOpen
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyling = {
    background: "none",
    color: buttonColor,
    border: "none",
    cursor: "pointer",
    marginLeft: "5px",
  };

  return (
    <div className={className}>
      <span>
        {displayText}
        <span>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={buttonStyling}
          >
            {isOpen ? collapseButtonText : expandButtonText}
          </button>
        </span>
      </span>
    </div>
  );
};

export default TextExpander;
