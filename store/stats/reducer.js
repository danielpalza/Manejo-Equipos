const iniState = {
  equipments: [],
  user: { username: '', token: '' },
  logged: false,
};

export default function Reducer(state = iniState, action) {
  console.log('action data:', action);
  /*Acciones login*/

  if (action.type === 'USER_LOGIN') {
    return Object.assign({}, state, {
      ...state,
      user: { ...state.user, token: action.stat.data.token },
      logged: true,
    });
  }
  if (action.type === 'USER_OUT') {
    return Object.assign({}, state, {
      ...state,
      user: { ...state.user, token: '' },
      logged: false,
    });
  }

  // Carga de objetos

  if (action.type === 'EQUIPMENT_LOAD') {
    return Object.assign({}, state, {
      ...state,
      equipments: action.stat.data,
    });
  }
 
  /*Retornamos el estado actualizado*/
  return state;
}

// mapStateToProps
export const mapStateToProps = (state) => {
  return {
    state,
  };
};
