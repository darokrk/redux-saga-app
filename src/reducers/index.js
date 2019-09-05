const initialState = {
  notes: []
};

const rootReducer = (state = initialState, { type, note, id }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        notes: [...state.notes, note]
      };
    case "REMOVE_NOTE":
      return {
        notes: [...state.notes.filter(note => note.id !== id)]
      };
    default:
      return state;
  }
};

export default rootReducer;
