import React from 'react'

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
        <div>
          <input
          type="text"
          placeholder=" Informe Seu Nome Completo"
          onChange={this.onChangeNome}                   
          />
        <input
          type="text"
          placeholder="Informe seu E-mail"
          onChange={this.onChangeEmail}     
        />
        <input
          type="text"
          placeholder="Informe o número do Telefone/Celular"
          onChange={this.onChangeTelefone}     
        />
        <input
          type="text"
          placeholder="Informe sua Senha"
          onChange={this.onChangeSenha}     
        />
        <button>Cadastrar</button>
        </div>

    )
  }



}