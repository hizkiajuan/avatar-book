import { UserApiFilter, UserApiResponse } from '@/common/contract.ts';
import { handleError } from '@/common/error.ts';
import http from '@/common/http.ts';

export async function getUserList(
  params?: UserApiFilter,
): Promise<UserApiResponse[]> {
  const response: Response = await http.get('users', params);

  if (!response.ok) {
    handleError('fetch: user list');
  }

  return response.json();
}
