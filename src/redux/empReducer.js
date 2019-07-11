import actions from './actions';

const initialState = {
  employeeList: []
};

const empReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_EMPLOYEES:
      return {...state, employeeList: action.payload };

    default: return state;
  }
};

export default empReducer;
