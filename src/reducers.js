function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

const todoList = createReducer(['Default Item'], {
  ADD_TODO_LIST_ITEM: (state, action) => (
    state.concat([action.payload])
  ),
});
export default todoList;
