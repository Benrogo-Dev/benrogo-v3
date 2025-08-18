import type { Metadata } from 'next';
import { BasePage, LinkiesTable } from '@/components';

export const metadata: Metadata = {
  title: 'Linkies',
};

const Page = () => {
  return (
    <BasePage>
      <LinkiesTable />
    </BasePage>
  );
};

export default Page;
