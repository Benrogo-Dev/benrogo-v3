"use client";

import { LinkiesTable } from "@/components";
import * as React from "react";

const LinkiesPageClient = () => {
  const [onlineOnly, setOnlineOnly] = React.useState(false);

  const handleOnlineOnlyChange = (value: boolean) => {
    setOnlineOnly(value);
    // api req parims here pookie
    console.log("Filter changed to onlineOnly:", value);
  };

  return (
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
  );
};

export default LinkiesPageClient;

