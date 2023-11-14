import React from 'react';
const PropertyItemView = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-4 w-[80%]">
      {data.map((item, index) => (
        <div key={index} className="rounded-xl p-4 h-[200px] bg-[url('https://static.rdc.moveaws.com/images/hero/default/2021-11/jpg/hp-hero-desktop.jpg')] bg-cover bg-center">
          <h3 className="text-lg text-white font-bold">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyItemView;