import { Link } from 'react-router-dom';
import { ReactComponent as CartButton } from '../images/shopping-cart-button.svg';

export const HeaderCartButton = () => {
  return (
    <div className="header__cart">
      <Link to="/cart" className="button button--cart">
        <span>0 ₽</span>
        <div className="button__delimiter"></div>
        <CartButton />
        <span>0</span>
      </Link>
    </div>
  )
}