import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container, Logo, MenuContent, Menu, Search } from './styles'

import imgLogo from '../../assets/imgs/logo.png'

import { BiSearch } from 'react-icons/all'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={imgLogo} alt="Logo image"/>
        </Link>
      </Logo>
      <MenuContent>
        <Menu>
          <NavLink to="/pedidos">Pedidos</NavLink>
          <NavLink to="/clientes">Clientes</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
        </Menu>
        <Search>
          <input type="text" placeholder="Buscar por pedido"/>
          <button><BiSearch/></button>
        </Search>

      </MenuContent>
    </Container>
  )
}

export default Header
