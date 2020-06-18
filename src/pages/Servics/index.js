import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { createServiceRequest } from '~/store/modules/servics/actions';

import { Container, Servicos } from './styles';

export default function Servics() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createServiceRequest(data));
  }

  return (
    <Container>
      <header>
        <h2>Crie um serviço</h2>
      </header>

      <div>
        <Form onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Nome do serviço"
          />
          <Input
            id="description"
            name="description"
            type="text"
            placeholder="Descrição do serviço"
          />
          <Input
            id="price"
            name="price"
            type="number"
            placeholder="Preço do serviço"
          />
          <button type="submit">Enviar</button>
        </Form>
      </div>
      <hr />
      <h2>Todos os seus serviços</h2>
      <ul>
        <Servicos>
          <strong>name</strong>
          <span>description</span>
          <span>R$</span>
        </Servicos>
        <Servicos>
          <strong>name</strong>
          <span>description</span>
          <span>R$</span>
        </Servicos>
        <Servicos>
          <strong>name</strong>
          <span>description</span>
          <span>R$</span>
        </Servicos>
      </ul>
    </Container>
  );
}
