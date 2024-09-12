"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
