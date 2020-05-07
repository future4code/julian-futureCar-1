import React from 'react';
import styled from 'styled-components';
import Logo from '../imagem/logo.png';

import MenuIcon from '@material-ui/icons/Menu';
import HeadsetIcon from '@material-ui/icons/HeadsetMic';
import ButComprar from '@material-ui/core/Button';
import ButVender from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 20vh;
  background-color: #fad140;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height:10vw;
  padding-left: 3vw;
  padding-right: 3vw;
`
const Imagem = styled.img`
  width: 200px;

`
const LinhaVertical = styled.div`
  float: left;
  height: 20px;
  border-left: 1px solid;
  box-sizing: border-box;
  padding-left: 3vw;
  padding-right: 3vw;

`
const Botao = styled.div`
   display: flex;
   align-content: space-between;

`

export class Header extends React.Component {
    render() {
      return (
        

    <HeaderContainer>
      <Imagem src={Logo}  alt="Logo"/> 
         <MenuIcon size="large"/>
            <LinhaVertical/>
                  
      <Botao>   

        <ButComprar variant="outlined" color="default"> <PersonIcon/>
            Comprar
        </ButComprar>

        <ButVender variant="outlined" color="default" > <PersonIcon/>
            Vender
        </ButVender>
        
      </Botao> 
       
        <HeadsetIcon size="large"/> 

        <div>
          <h3>Fale Conosco</h3>
           <p>0800 000 0000</p> 
        </div>
      

      
    </HeaderContainer>

        

         
      
      )
    }
  }