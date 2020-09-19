
import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 30px;

    background:#465258;

    display:flex;
    justify-content:space-between;
    align-items:center;

    -webkit-user-select: none;
    -webkit-app-region: drag;

`
export const Logo = styled.h1`
  font-size: 15px;
  font-weight: 500;
  text-align:right;
  margin-left:1rem;
  color:white;
`

export const WindowActions = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  margin-right:1rem;
`
export const DefaultActionButton = styled.button`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration:.2s;
  & + button {
    margin-left: 12px;
  }
  svg{
    font-size:17px;
    color:white;
    
  }
  &:active{
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
  
`
