/*! Generated by redux-scfld not for editing */

import {
  STATUS_PROCESS,
  STATUS_SUCCESS,
  STATUS_FAILURE,
  // Namespaces
  NAMESPACE_APP,
  // Types
  APP_LOAD,
} from './../types';

import appLoadAction from './app/load';

function _createProcess(namespace, type, ...args) { // eslint-disable-line no-underscore-dangle
  return {
    namespace,
    type,
    status: STATUS_PROCESS,
    args,
  };
}
function _createSuccess(namespace, type, result) { // eslint-disable-line no-underscore-dangle
  return {
    namespace,
    type,
    status: STATUS_SUCCESS,
    result,
  };
}
function _createFailure(namespace, type, error, args) { // eslint-disable-line no-underscore-dangle
  return {
    namespace,
    type,
    status: STATUS_FAILURE,
    args,
    error,
  };
}

function _createAction(namespace, type, action) { // eslint-disable-line no-underscore-dangle
  return (...args) => (dispatch, getState) => {
    dispatch(_createProcess(namespace, type, ...args));
    return new Promise(resolve => resolve(action(getState, ...args)))
      .then(result => dispatch(_createSuccess(namespace, type, result)))
      .catch(error => dispatch(_createFailure(namespace, type, error, args)));
  };
}


export const appLoad = _createAction(
  NAMESPACE_APP,
  APP_LOAD,
  appLoadAction,
);

