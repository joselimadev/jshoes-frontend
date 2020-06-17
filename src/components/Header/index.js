import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cart }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Jshoes" height="35px" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart.length} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cart: state.cart,
}))(Header);