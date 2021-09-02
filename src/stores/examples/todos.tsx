import ITodoList from "../../types/ITodoList";

const todosExample: ITodoList = {
  todos: {
    "0": { todo: "Une première chose à faire", done: false, id: "0" },
    "1": { todo: "Une deuxième chose à faire", done: false, id: "1" },
    "2": { todo: "Une troisième chose à faire", done: false, id: "2" },
    "3": { todo: "Une quatrième chose à faire", done: false, id: "3" },
    "4": { todo: "Une cinquième chose à faire", done: false, id: "4" },
  },
  order: ["0", "1", "2", "3", "4"],
  resps: {
    "0": {
      name: "Maurin",
      firstName: "Denis",
      birthday: new Date("2000-10-11"),
      address: "17 Rue Saint François, La rochelle",
    },
    "1": {
      name: "Dupont",
      firstName: "Jean",
      birthday: new Date("1990-01-01"),
      address: "1 Route de Beauvallon, 26800 Etoile/Rhône",
    },
  },
  link: { "0": ["0"], "1": ["1"], "2": ["0", "1"], "3": [], "4": [] },
};

export default todosExample;
