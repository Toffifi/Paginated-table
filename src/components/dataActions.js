import Api from './api'

const SET_DATA = 'SET_DATA';

export const setData = payload => ({
  type: SET_DATA,
  payload,
});

export const getData = () => {
  return (dispatch) => Api().then((items) => dispatch(setData(items)));
};


export const actions = {
  setData,
  getData,
};

export const types = {
  SET_DATA,
};