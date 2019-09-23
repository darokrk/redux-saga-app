const initialState = {
  notes: {}
};

const rootReducer = (state = initialState, { type, note, id }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: { ...state.notes, [note.id]: note }
      };
    case "REMOVE_NOTE":
      const { [id]: trmoved, ...rest } = state.notes;
      return {
        ...state,
        notes: rest
      };
    default:
      return state;
  }
};

export default rootReducer;
