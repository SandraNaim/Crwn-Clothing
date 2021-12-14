import React from "react";
import CustomButton from "../custom-button/custom-buttom.component";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems)
  const dispatch = useDispatch();
  const history = useHistory();

  return(
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.length ?
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
          :
          <span className="empty-message">You're cart is empty</span>
        }
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden())
      }}>
          GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

export default CartDropdown;