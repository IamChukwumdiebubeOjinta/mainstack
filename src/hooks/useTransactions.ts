import { useApi } from '@/contexts/api-context';
import { useQuery } from '@tanstack/react-query';

export function useTransactions() {
  const { getTransactions } = useApi();
  return useQuery({
    queryKey: ['transactions'],
    queryFn: getTransactions,
  });
}
