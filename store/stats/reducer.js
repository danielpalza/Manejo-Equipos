const iniState = {
  equipments: [],
  user: { username: '', token: '' },
  logged: false,
};

export default function Reducer(state = iniState, action) {

  console.log('action data:', action);
  /*Acciones login*/
  
  //Arreglar el tener que usar solo el login para el login comun y el token
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

  if (action.type === 'EQUIPMENT_EDIT') {
      
    let arr = state.equipments.map(a => a._id == action.stat._id? a=action.stat:"")

    return Object.assign({}, state, {
      ...state, equipments: [...arr]
    });
  }

  if (action.type === 'EQUIPMENT_ADD') {
    
    return Object.assign({}, state, {
      ...state, equipments: [action.stat, ...state.equipments]
    });
  }

  if (action.type === 'EQUIPMENT_DELETE') {
      
    let arr = state.equipments.filter(a => a._id !== action.stat._id)
    console.log("arr: ", arr)
    return Object.assign({}, state, {
      ...state, equipments: [...arr]
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
