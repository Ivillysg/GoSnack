import React from 'react'

import { Card, CardTitle } from './styles'
import CountUp from 'react-countup'

interface Props{
  icon?:string
  title?:string,
  value?:number,
  color?:string,
  duration?:string,
  money?:boolean,
}
const Widget: React.FC<Props> = ({ icon, title, value, color, duration, money }) => {
  return (
    <Card duration={duration}>
      <img src={icon} alt="widgetCard"/>
      <CardTitle color={color}>
        <span>{title}</span>
        <h4>{money ? 'R$' : null}<CountUp end={value}/></h4>
      </CardTitle>
    </Card>

  )
}

export default Widget
