import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppDataProvider } from '@/contexts/AppDataContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '数字健康 - 研究原型',
  description: '一个用于HCI研究的数字健康应用原型',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <AppDataProvider>
          {children}
        </AppDataProvider>
      </body>
    </html>
  );
} 