import { Header } from '../components'
import { Categories } from '../components/Categories'
import { Sort } from '../components/Sort'
import { PizzaList } from '../containers/PizzaList'

export const HomePage = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaList />
          </div>
        </div>
      </div>
    </div>
  )
}