import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UIProvider from "@/components/ui/provider";
import { ApiProvider } from "@/contexts/api-context";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ApiProvider>
                <UIProvider>
                    <App />
                </UIProvider>
            </ApiProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
