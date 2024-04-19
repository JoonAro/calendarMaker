export const ADD_FAVORITE = 'ADD_FAVORITE';

export const addFavorite = (calendar) => ({
    type: ADD_FAVORITE,
    payload: calendar
});