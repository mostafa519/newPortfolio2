const INTIAL_VALUE =  [];

export const FavoriteReducer = (state = INTIAL_VALUE, action) => {
  switch (action.type) {
    case "REMOVE_FROM_FAVORITES":
      return state.filter((movie) => movie.id != action.payload);
    case "ADD_TO_FAVORITES":
      return [...state, action.payload];
       default:
      return state;
  }
};
