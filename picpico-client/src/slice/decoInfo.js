import { createSlice } from "@reduxjs/toolkit";
// state 수정 방법 아래에 명시
const decoInfo = createSlice({
  name: "decoInfo",
  initialState: {
    decoList: {},
    myDecoCanvas: "",
    decoMode: "stroke",
  },

  reducers: {
    setDecoListInfo(state, action) {
      state.decoList = action.payload.value;
    },
    setMyDecoCanvasInfo(state, action) {
      state.myDecoCanvas = action.payload.value;
    },
    setDecoModeInfo(state, action) {
      state.decoMode = action.payload.value;
    },
  },
});

export let { setDecoListInfo, setMyDecoCanvasInfo, setDecoModeInfo } = decoInfo.actions;

export default decoInfo;
