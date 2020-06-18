import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { createServiceSuccess, createServiceFailure } from './actions';

export function* createService({ payload }) {
  try {
    const { name, description, price } = payload.data;

    const service = { name, description, price };

    const response = yield call(api.post, 'services', service);

    toast.success('Serviço criado com sucesso!');

    yield put(createServiceSuccess(response.data));

    history.push('/services');
  } catch (err) {
    toast.error('Erro ao criar o serviço, verifique seus dados!');

    yield put(createServiceFailure());
  }
}

export default all([
  takeLatest('@service/CREATE_SERVICE_REQUEST', createService),
]);
