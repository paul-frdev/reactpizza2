import React from 'react';

export const Categories = () => {

  const [active, setActive] = React.useState(0);
  const categoires = ['Мясные', "Вегетерианская", "Гриль", "Острые", "Закрытые"];
  
  return (
    <div className="categories">
      <ul>
        {categoires.map((category, index) => (
          <li
            key={index}
            onClick={() => setActive(index)}
            className={`${active === index ? 'active' : ''}`}
          >{category}</li>
        ))}
      </ul>
    </div>
  )
}