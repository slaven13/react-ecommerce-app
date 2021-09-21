import { SECTIONS_DATA } from "../../data/sections.data";

const INITIAL_STATE = {
  sections: SECTIONS_DATA,
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
