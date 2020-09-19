import styled from 'styled-components'
interface Props{
  color?:string,
  duration?:string
}

export const Card = styled.div<Props>`
  width:245px;
  height:149px;

  background:#fff;
  border-radius:5px;

  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;

  user-select:none;
  animation: fade-in-slogan ${({ duration }) => duration || '.5'}s;
  @keyframes fade-in-slogan {
    0%   { opacity: 0;  }
  30% { opacity: .3; }
  60% { opacity: .6; }
  80% { opacity: .8; }
  100% { opacity: 1; } 
}

  &:not(:last-child){
    margin-right:65px;
  }

  img{
    border-radius:50px;
    padding:15px;
    background:white;
    position:absolute;
    top:-25%;
    left:50%;
    transform:translateX(-50%);
    
  }
  
`
export const CardTitle = styled.div<Props>`
  margin-top:1.5rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  >span{
    font:500 20px Poppins;
    color:#A7AFB2;
  }
  >h4{
    font:500 30px Poppins;
    color:var(${({ color }) => {
      if (color === 'primary') {
        return '--color-primary'
      }
      if (color === 'yellow') {
        return '--yellow'
      }
      if (color === 'orage') {
        return '--orage'
      }
      if (color === 'red') {
        return '--red'
      }
    }});
  }

  &::before{
      content:'';
      display:block;
      margin-top:15px;
      margin-bottom:15px;

      width:30px;
      height:6px;

      background:var(${({ color }) => {
      if (color === 'primary') {
        return '--color-primary'
      }
      if (color === 'yellow') {
        return '--yellow'
      }
      if (color === 'orage') {
        return '--orage'
      }
      if (color === 'red') {
        return '--red'
      }
    }});
      z-index:10;
  }

`
