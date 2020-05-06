import React from 'react'
import styled from 'styled-components'
import logo from '../components/imagens/futurecar.png'
import logocar from '../components/imagens/logo.png'
import carimagem from '../components/imagens/foto-100.jpg'


const Car = styled.img`
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.2;
  position: fixed;
`

const Body = styled.div`
  
  background: #f2ce46;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const Form = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 35vw;
  height: 80vh;
  background: white;
  border-radius: 20px;
  margin: auto;
  z-index: 1;
`

const Informacao = styled.div`
  color: red;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  z-index: 1;
`

const Texto = styled.div`
  margin-top: 70px;
  margin-bottom: 120px; 
  width:100%;
  color: red;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  z-index: 1;
`

const InputDiv = styled.div`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
display: grid;

`

const Input = styled.input`
  border: none;
  background: rgb(248,250,248);
  width: 100%;
  height: 42px;
`

const Button = styled.button`
  width: 260px;
  height: 60px;
  background: red;
  border: none;
  font-size: 1.3rem;
  margin: auto;
`

const Footer = styled.div`
  width: 100%;
  height: 20vh;
  background: white;
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const Imagem = styled.img`
  height: 100%;
`

const Img = styled.img`
  width: 40vw;
  height: 40vh;
  margin: auto;
  z-index: 1;
`




export class Cadastro extends React.Component {
  state = {
    nome: "",
    email:"",
    telefone:"",
    senha: ""
  }

  onChangeNome = (event) => {
    this.setState({nome : event.target.value})
  } 
  onChangeEmail = (event) => {
    this.setState({email : event.target.value})
  } 
  onChangeTelefone = (event) => {
    this.setState({ telefone: event.target.value })
  } 
  onChangeSenha = (event) => {
    this.setState({ senha : event.target.value })
  } 

  render () {
    return (
        <Body>

          <Car src={carimagem}></Car>

          <Img src={logocar}></Img>
          <Texto>
          <h1>ÓTIMA ESCOLHA EM VENDER SEU <br></br>CARRO CONOSCO</h1>
          </Texto>

        <Form>
          <Informacao>
            <h2>PREENCHA SEUS DADOS</h2>  
          </Informacao>

          <InputDiv>
          <label>*NOME </label>
          <Input
          type="text"
          placeholder="Nome"
          onChange={this.onChangeNome}                   
          />
          </InputDiv>

      <InputDiv>
        <label>*EMAIL</label>
        <Input
          type="text"
          placeholder="E-mail"
          onChange={this.onChangeEmail}     
        />
      </InputDiv>

      <InputDiv>
      <label>*TELEFONE</label>
        <Input
          type="text"
          placeholder="Telefone"
          onChange={this.onChangeTelefone}     
        />
        </InputDiv>

        <InputDiv>
        <label>*TELEFONE</label>
        <Input
          type="text"
          placeholder="Telefone"
          onChange={this.onChangeSenha}     
        />
        </InputDiv>

        <Button>Enviar</Button>
        </Form>

        <Footer>
          <Imagem src={logo}></Imagem>
          <p>©Todos os direitos reservados a Shirlei, Melissa, Leonardo e Wellington</p>
        </Footer>
        </Body>

    )
  }
}