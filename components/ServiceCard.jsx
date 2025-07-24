import React from "react";

const ServiceCard = ({ icon: Icon, title, content, bgColor, iconColor }) => {
  return (
    <div className={`flex justify-start gap-2 p-4 rounded-xl shadow hover:shadow-lg transition-all ${bgColor}`}>
      <Icon className={`text-2xl w-18 h-18 ${iconColor}`} />

      <div>
        <h3 className='text-lg font-semibold text-black'>{title}</h3>
        <p className='text-sm text-dark-grey'>{content}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
