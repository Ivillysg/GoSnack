import styled from 'styled-components'

export const Container = styled.header`
  width:90%;
  max-width:1600px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  margin:5px auto;

`
export const Logo = styled.div`
  >a{
      img{
      height:100px;
    }
  }
`

export const MenuContent = styled.div`
  width:55%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const Menu = styled.nav`
  >a{
    text-decoration:none;
    font:500 15px Poppins;
    color:#9AA2A7;

    padding:10px;
    margin:15px; 

    transition-duration:.3s;

    border-radius:5px;
    &:hover{
      background:#6D7478;
      color:white;
    }
  }
  .active{
      background:#6D7478;
      color:white;
  }
`

export const Search = styled.div`
  position: relative;
  display:flex;
  align-items:center;
  
  >input{
    width:15rem;
    height:45px;
    border-radius:5px;
    border:none;
    padding:3px 15px;
    outline:none;
    &::placeholder{
      color:#C6CBCE;
      font:400 15px Poppins;
    }
  }
  >button{
   background:transparent;
   border:none;
   position:absolute;
   right:5px;
   svg{
     font-size:24px;
     color:#C6CBCE;
   }
  }
  
`
