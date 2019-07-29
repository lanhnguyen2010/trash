export const loadState = () => {
  try {
    const serializedState = localStorage["reduxState"];
    if (serializedState === null) {
      console.log("state null", serializedState);
      return {};
    }
    const result = JSON.parse(serializedState);
    return result;
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    // ignore write errors
  }
};