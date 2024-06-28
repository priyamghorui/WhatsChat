const initialstate = [];
export const sendchatreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "send_chat":
      return [...state, action.data];
    default:
      return state;
  }
};
