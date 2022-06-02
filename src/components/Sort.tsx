import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';


export const Sort = () => {

  const filteredSort = ["популярности", "цене", "алфавиту"];

  const [active, setActive] = React.useState(0);
  const [showList, setShowList] = React.useState(false);
  const [value, setValue] = React.useState<string | null>(filteredSort[0])

  
  const handleShowList = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
    let click = event.target as HTMLLIElement;
    setActive(index);
    setValue(click.textContent)

    setShowList(false)
  }

  return (
    <div className="sort">
      <div
        className="sort__label"
        onClick={() => setShowList(!showList)}
      >
        <RiArrowDownSFill width={25} className='active' />
        <b>Сортировка по:</b>
        <span>{value}</span>
      </div>
      {showList &&
        <div className="sort__popup">
          <ul>
            {filteredSort.map((filter, index) => (
              <li
                key={index}
                onClick={(event) => handleShowList(event, index)}
                className={`${active === index ? 'active' : ''}`}
              >{filter}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}