export const loadState = () => {
  try {
    const serializedState = localStorage["reduxState"];
    console.log("state", serializedState);
    if (serializedState === null) {
      console.log("state null", serializedState);
      return {};
    }
    const result = JSON.parse(serializedState);
    console.log("state result", result);
    return result;
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
    console.log("save state", serializedState);
  } catch {
    // ignore write errors
  }
};