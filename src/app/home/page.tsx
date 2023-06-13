'use client';

import Loading from '@/app/home/loading.tsx';
import { getUserList } from '@/app/home/services/HomeService.ts';
import { ImageWithFallback } from '@/app/shared/components/ImageWithFallback.tsx';
import { UserApiResponse } from '@/common/contract.ts';
import {
  HeartIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
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
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <Suspense fallback={<Loading />}>
        {userList.map((user: UserApiResponse) => (
          <li
            key={user.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <ImageWithFallback
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg`}
                fallbackSrc={'fallback-avatar.svg'}
                alt={`Avatar of ${user.name}`}
                width={40}
                height={40}
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {user.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Email</dt>
                <dd className="text-sm text-gray-500">
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </dd>
                <dt className="sr-only">Phone</dt>
                <dd className="text-sm text-gray-500">
                  <a href={`tel:${user.phone}`}>{user.phone}</a>
                </dd>
                <dt className="sr-only">Website</dt>
                <dd className="text-sm text-gray-500">{user.website}</dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <a
                    href={'#'}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <HeartIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={'#'}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PencilSquareIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={'#'}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <TrashIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </Suspense>
    </ul>
  );
}
