import { useApi } from '@/contexts/api-context';
import { useQuery } from '@tanstack/react-query';

export function useWallet() {
  const { getWallet } = useApi();
  return useQuery({
    queryKey: ['wallet'],
    queryFn: getWallet,
  });
}
