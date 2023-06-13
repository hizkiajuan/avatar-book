import '../globals.css';
import React from 'react';

export const metadata = {
  title: 'Avatar Book',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className={'grid bg-gray-50 p-6'}>{children}</main>
      </body>
    </html>
  );
}
