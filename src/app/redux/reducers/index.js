/*! Generated by redux-scfld not for editing */

import app from './app';
import defaultState from './../states';

const namespaceReducersMap = {
  app,
};

export default function (state = defaultState, action) {
  const { namespace } = action;
  if (namespace in namespaceReducersMap) {
    const prevNamespaceState = state[namespace];
    const nextNamespaceState = namespaceReducersMap[namespace](prevNamespaceState, action);
    if (typeof nextNamespaceState === 'undefined') {
      throw new Error(`State from reducer '${namespace}' cannot be undefined`);
    }
    if (prevNamespaceState !== nextNamespaceState) {
      return { ...state, [namespace]: nextNamespaceState };
    }
  }
  return state;
}
