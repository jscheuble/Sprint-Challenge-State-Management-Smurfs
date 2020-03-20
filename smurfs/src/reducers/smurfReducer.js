import { ADD_SMURF, SET_DATA } from "../actions/smurfActions";

export const initialState = {
  smurfs: [],
  newSmurf: {
    name: "",
    age: "",
    height: ""
  }
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        smurfs: action.payload
      };
    // case ADD_SMURF:
    //   return {
    //     ...state,
    //     smurfs: [...smurfs, action.payload]
    //   };
    default:
      return state;
  }
};
