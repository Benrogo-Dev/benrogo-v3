import type { Metadata } from "next";
import { BasePage } from "@/components";
import LinkiesPageClient from "./LinkiesPageClient";

export const metadata: Metadata = {
  title: "Linkies",
};

const Page = () => {
  return (
    <BasePage>
      <LinkiesPageClient />
    </BasePage>
  );
};

export default Page;
