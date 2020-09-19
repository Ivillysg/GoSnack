import React from 'react'

import { Container, Header, HeaderTitle, Main, MainHeader, Content } from './styles'

import { OpenBox, CloseBox, Clients, Money } from '../../components/Icons'

import Widget from '../../components/Widget'

const dashboard: React.FC = () => {
  return <Container>
    <Header>
      <HeaderTitle>
        <h3>
          Seja bem-vindo(a)
        </h3>
        <span>18 de Setembro de 2020</span>
      </HeaderTitle>
    </Header>
    <Main>
      <MainHeader>
        <Widget color="primary" icon={OpenBox} title="Pedidos em aberto" value={100}/>
        <Widget color="yellow" icon={CloseBox} title="Total de pedidos" value={100}/>
        <Widget color="orage" icon={Clients} title="Total de clientes" value={100}/>
        <Widget color="red" icon={Money} title="Total vendido" value={100} money={true}/>

      </MainHeader>
      <Content>
        Content
      </Content>
    </Main>
  </Container>
}

export default dashboard
