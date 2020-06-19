import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';

import { createServiceRequest } from '~/store/modules/servics/actions';

import { Container, Servicos } from './styles';

export default function Servics() {
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadService() {
      const response = await api.get('services');

      const service = response.data.map((servico) => ({
        id: servico.id,
        name: servico.name,
        description: servico.description,
        price: servico.price,
      }));

      setServices(service);
    }

    loadService();
  }, [services]);

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
        {services.map((servico) => (
          <Servicos key={servico.id}>
            <strong>{servico.name}</strong>
            <span>{servico.description}</span>
            <span>R$ {servico.price}</span>
          </Servicos>
        ))}
      </ul>
    </Container>
  );
}
