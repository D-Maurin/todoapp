import { Action } from "redux";

export enum ActionType {
  ADD,
  REMOVE,
  EDIT,
  TOGGLE_DONE,
  REORDER,
  ADD_RESP,
}

export interface IAction extends Action {
  type: ActionType;
  [key: string]: any;
}
