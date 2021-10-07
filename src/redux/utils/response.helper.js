import { current } from "@reduxjs/toolkit";
import gVariables from "@stores/shared/variables";
import { arrayExtension } from "@utils/helpers";

export default {
  INITIAL_STATE: {
    isFetching: false,
    ok: true,
    message: "",
    action: "",
    d: [],
  },
  GET: (state, response, additionalData = {}) => {
    const tempState = {
      ...state,
      isFetching: false,
      ok: response.ok,
      message: response.message,
      action: gVariables.GET,
      d: response.rs,
    };

    return {
      ...tempState,
      ...additionalData,
    };
  },
  INSERT: (state, response, additionalData = {}) => {
    const tempState = {
      ...state,
      isFetching: false,
      ok: response.ok,
      message: response.message,
      action: gVariables.INSERT,
      d: arrayExtension.insert(state.d, 0, response.rs[0]),
    };

    return {
      ...tempState,
      ...additionalData,
    };
  },
  UPDATE: (state, response, additionalData = {}) => {
    const tempState = {
      ...state,
      isFetching: false,
      ok: response.ok,
      message: response.message,
      action: gVariables.UPDATE,
      d: arrayExtension.update(state.d, response.rs[0]),
    };

    return {
      ...tempState,
      ...additionalData,
    };
  },
  DELETE: (state, response, additionalData = {}) => {
    const tempState = {
      ...state,
      isFetching: false,
      ok: response.ok,
      message: response.message,
      action: gVariables.DELETE,
      d: arrayExtension.delete(state.d, response.rs),
    };

    return {
      ...tempState,
      ...additionalData,
    };
  },
};
