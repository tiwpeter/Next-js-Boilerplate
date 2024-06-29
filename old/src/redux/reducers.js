// reducers.js
const initialState = {
    suggestedTopic: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SUGGESTED_TOPIC':
        return {
          ...state,
          suggestedTopic: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  