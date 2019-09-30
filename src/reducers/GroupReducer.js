import UserService from '../services/UserService.js';

const GroupReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_GROUP':
      console.log('REDUCERING SISÄL');
      // console.log('TODO !! Stateen vaan yks grouppi');
      return [...state, action.data];
    case 'LEAVE_GROUP':
      console.log('LEAVEGROUP ');
      return [...state, action.data];
    case 'INIT_GROUPS':
      console.log('INIT_GROUPS');
      return action.data;
    default:
      return state;
  }
};

export const initializeGroups = () => {
  return async dispatch => {
    const groups = await UserService.getMyGroups();
    console.log(groups);
    dispatch({
      type: 'INIT_GROUPS',
      data: groups,
    });
  };
};
export const newGroup = name => {
  return async dispatch => {
    const newGroup = await UserService.createNewGroup(name);
    dispatch({
      type: 'NEW_GROUP',
      data: newGroup,
    });
  };
};
export default GroupReducer;
