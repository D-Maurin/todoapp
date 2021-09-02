export interface ITodo {
  todo: string;
  done: boolean;
  id: string;
}

export interface IResp {
  firstName: string;
  name: string;
  birthday: Date | null;
  address: string;
}

export interface IRespList {
  [key: string]: IResp;
}

export interface ITodoList {
  todos: {
    [key: string]: ITodo;
  };
  order: string[];
  resps: IRespList;
}
