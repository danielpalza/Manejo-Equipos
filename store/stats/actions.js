import React from 'react';

//Login
export function userLogin(stat) {
  console.log(stat);
  return {
    type: 'USER_LOGIN',
    stat,
  };
}
export function userOutSession(stat) {
  console.log(stat);
  return {
    type: 'USER_OUT',
  };
}

//Carga objetos

export function equipmentLoad(stat) {
  console.log(stat);
  return {
    type: 'EQUIPMENT_LOAD',
    stat,
  };
}
export function equipmentEdit(stat) {
  console.log(stat);
  return {
    type: 'EQUIPMENT_EDIT',
    stat,
  };
}
export function equipmentAdd(stat) {
  console.log(stat);
  return {
    type: 'EQUIPMENT_ADD',
    stat,
  };
}
export function equipmentDelete(stat) {
  console.log(stat);
  return {
    type: 'EQUIPMENT_DELETE',
    stat,
  };
}



// mapDispatchToProps
export const mapDispatchToProps = (dispatch) => ({
  login: (stat) => dispatch(userLogin(stat)),
  unLogin: () => dispatch(userOutSession()),
  equipLoad: (stat) => dispatch(equipmentLoad(stat)),
  equipEdit: (stat) => dispatch(equipmentEdit(stat)),
  equipAdd: (stat) => dispatch(equipmentAdd(stat)),
  equipDelete: (stat) => dispatch(equipmentDelete(stat)),
});
