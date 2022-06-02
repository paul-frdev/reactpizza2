import { HeaderCartButton } from './HeaderCartButton';
import logo from '../images/pizza-logo.svg';
import { Search } from './search';

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <a href='/' className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </a>
        <Search/>
        <HeaderCartButton />
      </div>
    </div>
  )
}