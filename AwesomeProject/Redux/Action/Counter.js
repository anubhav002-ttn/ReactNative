export const addition = (id) => {
    return {
      type: "INCREMENT",
      id
    };
  };
  export const subtraction = (id) => {
    return {
      type: "DECREMENT",
      id
    };
  };
  // export const deleteItem = (id) => {
  //   return {
  //     type: "DELETE_ITEM",
  //     id
  //   };
  // };