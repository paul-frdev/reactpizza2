import { ReactComponent as CartButton } from '../images/shopping-cart-button.svg';

export const HeaderCartButton = () => {
  return (
    <div className="header__cart">
      <a href="/cart.html" className="button button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <CartButton />
        <span>3</span>
      </a>
    </div>
  )
}