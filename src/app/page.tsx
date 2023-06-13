'use client';

import Loading from '@/app/loading.tsx';
import { getUserList } from '@/app/services/HomeService.ts';
import { UserApiResponse } from '@/common/contract.ts';
import React, { Suspense, useEffect, useState } from 'react';

export default async function Home(): Promise<React.JSX.Element> {
  const [userList, setUserList] = useState([] as UserApiResponse[]);

  useEffect(() => {
    const fetchUserList = async (): Promise<UserApiResponse[]> => getUserList();

    fetchUserList().then((response: UserApiResponse[]): void => {
      setUserList(response);
    });
  }, [setUserList]);

  return (
    <section>
      <Suspense fallback={<Loading />}>
        {userList.map((user: UserApiResponse) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </Suspense>
    </section>
  );
}
