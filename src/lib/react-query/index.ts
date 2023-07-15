import React from "react";
import { QueryClient } from "@tanstack/react-query";

export const getQueryClient = React.cache(() => new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false
        }
    }
}));

export const queryClient = getQueryClient();