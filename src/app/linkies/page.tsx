import type { Metadata } from "next";
import { BasePage, LinkTable } from "@/components";

export const metadata: Metadata = {
  title: "Linkies"
};

// const test: LinkiesEntry[] = [
//   {
//     url: "https://www.google.com/",
//     status: "online",
//     requests: 28127271,
//     loadTime: 1.27,
//     reliability: 4.8
//   },
//   {
//     url: "https://www.github.com/",
//     status: "offline",
//     requests: 1827364,
//     loadTime: 2.15,
//     reliability: 3.2
//   },
//   {
//     url: "https://www.stackoverflow.com/",
//     status: "unknown",
//     requests: 927364,
//   },
//   {
//     url: "https://www.reddit.com/",
//     status: "online",
//     requests: 5637281,
//     loadTime: 1.45,
//     reliability: 4.5
//   },
//   {
//     url: "https://www.exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.com/",
//     status: "offline",
//     requests: 12345,
//     loadTime: 3.01,
//     reliability: 1.8
//   }
// ];

const Home = () => {
  return (
    <BasePage>
      <LinkTable
        linkData={[
          {
            url: "https://www.google.com",
            requests: 0,
            status: "offline",
            loadTime: 10.3,
            reliability: 4.2
          }
        ]}
      />
    </BasePage>
  );
}

export default Home;