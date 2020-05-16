const intialSate = {
  title: "",
  videoUrl: "",
  moduleList: []
};

const reducer = (prevState = intialSate, action) => {
  switch (action.type) {
    case "INIT_STATE":
      return {
        ...prevState,
        title: action.payLoad.title,
        videoUrl: action.payLoad.link
      };
    default:
      return prevState;
  }
};

export default reducer;
