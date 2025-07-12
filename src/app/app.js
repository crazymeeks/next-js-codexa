'use client';
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

const App = ({children}) => {

  return (
    
    <Provider store={store}>
      {children}
      <ToastContainer/>
    </Provider>
  );
};

export default App;