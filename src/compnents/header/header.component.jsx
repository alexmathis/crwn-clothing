import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {useDispatch, useSelector} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'


const Header = () => {
    const hidden = useSelector(selectCartHidden);
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());
    return (
        <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
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
                    <OptionLink as='div' onClick={signOutUser}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
   
};

export default Header;
