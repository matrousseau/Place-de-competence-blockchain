const initialState = {
  todos: [{
    id: 213,
    title: 'Collecter des données',
    description: "Récupération de différentes sources d'articles pour le système de recommandation.",
    completed: true,
    priority: 'high',
  },
  {
    id: 215,
    title: 'Scrapping',
    description: 'Déployement de la solution de scrapping pour récupérer les différents articles. ',
    completed: true,
    priority: 'low',
  },
  {
    id: 214,
    title: 'NLP',
    description: "Entrainement de l'algorithme de NLP pour classifier les articles "
    + 'selon les préférences des utilisateurs.',
    completed: false,
    priority: 'medium',
  },
  {
    id: 216,
    title: 'Mise en production',
    description: "Mise en production de l'algortihme entrainé.",
    completed: false,
    priority: 'low',
  },
  {
    id: 217,
    title: 'Création du chatbot',
    description: "Choix d'une solution de chatbot et configuration de "
        + " la solution + implémentation de l'algorithme de classification",
    completed: false,
    priority: 'low',
  }],
  priorityFilter: '',
};

function getId(state) {
  return state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          title: action.title,
          description: action.description,
          priority: action.priority,
          completed: false,
          id: getId(state),
        }, ...state.todos],
      });
    case 'COMPLETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.map(todo => (todo.id === action.id
          ? Object.assign({}, todo, {
            updated: false,
            completed: !todo.completed,
          }) : todo)),
      });
    case 'DELETE_TODO':
      return Object.assign({}, state, {
        todos: state.todos.filter(todo => todo.id !== action.id),
      });
    case 'PRIORITY_FILTER':
      return Object.assign({}, state, {
        priorityFilter: action.priorityFilter,
      });
    default:
      return state;
  }
};
export default todoReducer;
