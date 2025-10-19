import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Transaction, User, Wallet } from '@/types';

const BASE_URL = 'https://fe-task-api.mainstack.io';

async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || `API error: ${res.status}`);
  }

  return res.json();
}

interface ApiContextProps {
  getUser: () => Promise<User>;
  getWallet: () => Promise<Wallet>;
  getTransactions: () => Promise<Transaction[]>;
}

const ApiContext = createContext<ApiContextProps>(null as any);

interface ApiProviderProps {
  children: ReactNode;
}

export function ApiProvider({ children }: ApiProviderProps) {
  const value = useMemo(
    () => ({
      getUser: () => apiFetch<User>('/user'),
      getWallet: () => apiFetch<Wallet>('/wallet'),
      getTransactions: () => apiFetch<Transaction[]>('/transactions'),
    }),
    []
  );

  return (
    <ApiContext.Provider value={value}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error('useApi must be used inside ApiProvider');
  return ctx;
}