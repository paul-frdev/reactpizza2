import React from 'react'
import { IGoodsListProps } from '../../data/products';
import { ReactComponent as AddIcon } from '../../images/add.svg';


interface PizzaBlockProps {
  productItem: IGoodsListProps
}

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ productItem }) => {

  const [active, setActive] = React.useState(0);
  const [activeRadius, setActiveRadius] = React.useState(0)
  const { name, imageUrl, types, price, sizes } = productItem;
  const typesNames = ['тонкое', "традиционное"]

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className={`${active === index ? 'active' : ''}`}
            >{typesNames[item]}</li>
          ))}

        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              onClick={() => setActiveRadius(index)}
              className={`${activeRadius === index ? 'active' : ''}`}
            >{size} cm</li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} $</div>
        <button className="button button--outline button--add">
          <AddIcon />
          <span>Добавить</span>
          <i>0</i>
        </button>
      </div>
    </div>
  )
}