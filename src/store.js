export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],

    characters: [],
    vehicles: [],
    planets: [],
    favorites: []



  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };



    case 'get_character':
      return {
        ...store,
        characters: action.payload
      }

    case 'get_vehicle':
      return {
        ...store,
        vehicles: action.payload
      }

    case 'get_planet':
      return {
        ...store,
        planets: action.payload
      }

    case 'get_favorite':
      return {
        ...store,

        favorites: [...store.favorites, action.payload]       

      }
    
    case 'delete_favorite':
      return{
        ...store,
        favorites:store.favorites.filter(favorite=>favorite.uid !== action.payload)
      }

    default:
      throw Error('Unknown action.');


  }
}