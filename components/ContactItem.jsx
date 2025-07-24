import React from "react";

const ContactItem = ({ icon, title, content }) => {
  // Define custom idle colors for each icon based on title
  const iconColors = {
    Phone: "text-pink-500",
    location: "text-teal-500",
    Email: "text-rose-500",
    Birthday: "text-purple-500",
  };

  const iconColor = iconColors[title] || "text-gray-500";

  return (
    <div className="flex items-center gap-4 group">
      <div
        className={`p-3 rounded-xl bg-white shadow-md transition-all duration-300 ease-in-out 
        ${iconColor} group-hover:bg-main-blue group-hover:text-white`}
      >
        <span className="text-xl">{icon}</span>
      </div>

      <div>
        <div className="text-sm text-dark-grey capitalize">{title}</div>
        <div className="text-base text-black leading-4 transition-colors duration-300 group-hover:text-main-blue">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
