import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import CustomProvider from "@/components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>
);
