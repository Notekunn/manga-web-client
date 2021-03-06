import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import globalReducer from "../features/app/globalSlice";
import artistReducer from "../features/artist/artistSlice";
import categoryReducer from "../features/category/categorySlice";
import { createLogger } from "redux-logger";
// eslint-disable-next-line no-unused-vars
const loggerMiddleware = createLogger();
const rootReducer = {
  auth: authReducer,
  user: userReducer,
  global: globalReducer,
  artist: artistReducer,
  category: categoryReducer,
};
const store = configureStore({
  reducer: rootReducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});

export default store;
