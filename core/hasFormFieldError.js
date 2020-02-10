export function hasFieldError(state, path) {
  if (state.errors) {
    console.log("state.errors Lyra: ", state.errors, "path Lyra: ", path);
    return true;
    // return state.errors.filter(error => error.field === path).length > 0;
  }
  return false;
}
