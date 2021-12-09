import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv> //u can put <OptionLink as="div" 
                :
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({   //createStructuredSelector will automatically pass the state to the select current user and the cart iem fn
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);