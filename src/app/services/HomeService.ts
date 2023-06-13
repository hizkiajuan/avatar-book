import { UserApiFilter, UserApiResponse } from '@/common/contract.ts';
import http from '@/common/http.ts';

export async function getUserList(
  params?: UserApiFilter,
): Promise<UserApiResponse[]> {
  const response: Response = await http.get('users', params);
  return response.json();
}
