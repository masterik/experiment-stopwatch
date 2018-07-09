import { Action } from "redux";

const initialState = {
};

export type State = typeof initialState;

export default function (state = initialState, action: Action): State {
  return state;
}
