'use client';
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

const queryClient = new QueryClient();

const App = ({children}) => {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <ToastContainer/>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;