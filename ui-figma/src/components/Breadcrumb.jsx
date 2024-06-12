import React from 'react';


const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        {items.map((item, index) => (
          <li key={index} className={index === items.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}>
            {item.link ? <a href={item.link}>{item.name}</a> : item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
