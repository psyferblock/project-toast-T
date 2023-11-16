
import React from "react";
import Toast from "../Toast";

function ToastProvider({children}){
    const ToastContext = React.createContext()



const [toasts, setToasts] = React.useState([]);

return (
  <ToastContext.Provider value={{toasts ,setToasts }}>
    {children}
  </ToastContext.Provider>
);

}
export default ToastProvider