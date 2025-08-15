"use client";

import type { Metadata } from "next";
import { BasePage, LinkiesTable } from "@/components";
import * as React from "react";

export const metadata: Metadata = {
  title: "Linkies",
};

const Home = () => {
  const [onlineOnly, setOnlineOnly] = React.useState(false);

  const handleOnlineOnlyChange = (value: boolean) => {
    setOnlineOnly(value);
    // api req parims here pookie
    console.log("Filter changed to onlineOnly:", value);
  };

  return (
    <BasePage>
      <LinkiesTable
        onlineOnly={onlineOnly}
        onOnlineOnlyChange={handleOnlineOnlyChange}
        linkData={[
          {
            url: "https://www.google.com",
            requests: 38495723,
            status: "online",
            loadTime: 0.33,
            reliability: 8.2,
          },
          {
            url: "https://www.example.com",
            requests: 2793,
            status: "offline",
            reliability: 1.7,
          },
          {
            url: "https://benrogo.net",
            requests: 129344,
            status: "maintenance",
            reliability: 4.2,
          },
          {
            url: "https://discord.com",
            requests: 91360,
            status: "unknown",
          },
        ]}
      />
    </BasePage>
  );
};

export default Home;
