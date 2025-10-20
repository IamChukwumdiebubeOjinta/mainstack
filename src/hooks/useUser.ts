import { useApi } from '@/contexts/api-context';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { getUser } = useApi();
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });
}
