export function createServiceRequest(data) {
  return {
    type: '@service/CREATE_SERVICE_REQUEST',
    payload: { data },
  };
}

export function createServiceSuccess(service) {
  return {
    type: '@service/CREATE_SERVICE_SUCCESS',
    payload: { service },
  };
}

export function createServiceFailure() {
  return {
    type: '@service/CREATE_SERVICE_REQUEST',
  };
}
