import { getUserList } from '@/app/services/HomeService.ts';
import { UserApiResponse } from '@/common/contract.ts';
import React from 'react';

export default async function Home(): Promise<React.JSX.Element> {
  const userList: UserApiResponse[] = await getUserList();

  return (
    <section>
      {userList.map((user: UserApiResponse) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </section>
  );
}
