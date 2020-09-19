import React from 'react'
import Widget from '../../components/Widget'
import { OpenBox, CloseBox, Clients, Money } from '../../components/Icons'

const pedidos: React.FC = () => {
  return (
    <>
      <h1>Pedidos</h1>
      <Widget color="primary" icon={OpenBox} title="Pedidos em aberto" value="100"/>
    </>
  )
}

export default pedidos
