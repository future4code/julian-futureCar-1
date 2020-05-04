import React from 'react'



export class Login extends React.Component {

state = {
  email:"",
  senha:"",
  status: "deslogado"
}

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
  } 
  onChangeSenha = (event) => {
    this.setState({ senha: event.target.value })
  } 
  render () {

    return  (
      <div>
        <input 
         type="text"           
         placeholder={"Insira seu E-mail"}
         onChange={this.onChangeEmail}
         />
        <input
          type="text"         
          placeholder={"**************"}
          onChange={this.onChangeSenha}          
          />
        <button>Login</button>
      </div>
    )
  }
}