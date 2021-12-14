import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { HeaderContainer, LogoContainer, OptionDiv, OptionLink, OptionsContainer } from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    const signOutUser = dispatch(signOutStart());

    return (
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
                    <OptionDiv onClick={signOutUser}>SIGN OUT</OptionDiv> //u can put <OptionLink as="div" 
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
    )
};

export default Header;