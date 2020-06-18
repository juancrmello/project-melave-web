import produce from 'immer';

const INITIAL_STATE = {
  service: null,
};

export default function service(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@service/CREATE_SERVICE_SUCCESS': {
        draft.service = action.payload.service;
        break;
      }
      default:
    }
  });
}
