// Tooltip.js
import {} from "react";

const Tooltip = ({ children, title }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute right-1/2 transform translate-x-1/2 mt-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded-md py-1 px-2">
        {title}
      </div>
    </div>
  );
};

export default Tooltip;
