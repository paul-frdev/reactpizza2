import { HeaderCartButton } from './HeaderCartButton';
import logo from '../images/pizza-logo.svg';
import { Search } from './search';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to='/' className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
        <Search/>
        <HeaderCartButton />
      </div>
    </header>
  )
}