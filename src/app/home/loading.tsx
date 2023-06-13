import Image from 'next/image';
import React from 'react';

export default function Loading(): React.JSX.Element {
  return (
    <section
      className={'flex h-screen w-screen items-center justify-center bg-white'}
    >
      <Image src={'loading.svg'} alt={'Loading'} width={100} height={100} />
    </section>
  );
}
