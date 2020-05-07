import React from 'react';
import styled from 'styled-components';
import Logo from '../imagem/logo.png';

import MenuIcon from '@material-ui/icons/Menu';
import HeadsetIcon from '@material-ui/icons/HeadsetMic';
import ButComprar from '@material-ui/core/Button';
import ButVender from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';

const HeaderContainer = styled.div`
  width: 100%;
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
  margin-left: 1vw;
  padding-left: 3vw;
`
const Botao = styled.div`
   display: flex;
   justify-content: space-between;
   width: 20vw;

`
const FaleConosco = styled.div`
   display: flex;
   justify-content: center;
    align-items: center;
`
const LogoEBotoes = styled.div`
  display:flex;
  align-items:center;
`

const BotaoComprar = styled(ButComprar)`
`

const BotaoVender = styled(ButVender)`
`

const TextoFaleConosco = styled.div`
`

const NomeTelefone = styled.h3`
  margin: 0;
`

const Telefone = styled.p`
  margin: 0;
`


export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoEBotoes>
          <Imagem src={Logo} alt="Logo" />
          <MenuIcon size="large" />
          <LinhaVertical />
          <Botao>
            <BotaoComprar variant="outlined" color="default">
              <PersonIcon />
              Comprar
            </BotaoComprar>
            <BotaoVender
              onClick={this.props.onClickVender}
              variant="outlined"
              color="default" >
              <PersonIcon />
              Vender
            </BotaoVender>
          </Botao>
        </LogoEBotoes>
        <FaleConosco>
          <HeadsetIcon style={{ fontSize: 50 }} />
          <TextoFaleConosco>
            <NomeTelefone>Fale Conosco</NomeTelefone>
            <Telefone>0800 000 0000</Telefone>
          </TextoFaleConosco>
        </FaleConosco>
      </HeaderContainer>
    )
  }
}