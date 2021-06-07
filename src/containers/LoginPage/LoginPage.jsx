import React from 'react';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Usuário</label>
        <input type="text" />
      </div>
      <div>
        <label>Senha</label>
        <input type="password" />
      </div>
      <p>Não lembra da sua senha? clique aqui</p>
    </div>
  );
}
