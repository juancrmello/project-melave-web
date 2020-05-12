import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <form action="">
        <input placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
