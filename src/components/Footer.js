import React from 'react'
import styled from 'styled-components'
import Logo from '../imagem/logo.png'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YoutubeIcon from '@material-ui/icons/YouTube';

const Container = styled.div`
width : 100%;
margin:0;
background-color: #fad140;
padding-top:20px;
position: relative;
bottom: 0;
`
const ContainerContatos = styled.div`
border-top: 2px solid #000;
border-bottom: 2px solid #000;
height:35px;
display:flex;
`

const Imagem = styled.img`
width: 120px;
`
const Paragrafo = styled.p`
font-size: 11px;
font-weight:bold;
`
const Whats = styled.div`
float: left;
display:flex;
align-items:center;
width:60%;
font-size: 11px;
font-weight:bold;
margin-left: 40px;
`
const Telefone = styled.div`
display:flex;
align-items:center;
width:100%;
font-size: 11px;
font-weight:bold;
margin-left: 0;
`
const Direita = styled.div`
display:flex;
float:right;
align-items:center;
width:100%;
font-size: 11px;
font-weight:bold;
flex-direction: end;
`
const Reservados = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;

`
export class Footer extends React.Component {


  render() {

    return (
      <Container>
        <div></div>
        <ContainerContatos>
          <Whats>
            <WhatsAppIcon fontSize="small" /> WHATSAPP (21) 0101-01010

            </Whats>
          <Telefone>
            <CallIcon fontSize="small" /> 0800 000 0000
            </Telefone>
          <Direita>
            Siga  nossas redes sociais:
            <Paragrafo><FacebookIcon fontSize="small" /><InstagramIcon fontSize="small" /><TwitterIcon fontSize="small" /><YoutubeIcon fontSize="small" /></Paragrafo>
          </Direita>
        </ContainerContatos>
        <Reservados>
          <Imagem src={Logo} alt="Logo" />
          <Paragrafo>© Todos os Direitos reservados  Shirlei , Melissa, Leonardo e Wellington</Paragrafo>
        </Reservados>
      </Container>
    )
  }
}

export default Footer