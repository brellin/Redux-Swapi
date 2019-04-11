import { SUCCESS, FAILURE, FETCHING } from "../actions";
const initialState = {
  characters: [],
  isFetching: true,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload,
        error: ''
      }
    case FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};
