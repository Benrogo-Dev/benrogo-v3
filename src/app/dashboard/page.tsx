import type { Metadata } from "next";
import { Checkbox } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard"
};

export const runtime = "edge";

const Home = async () => {
  return (
    <>
      <div style={{ display: "flex", flexFlow: "row", gap: 10 }}>
        <Checkbox color="red" />
        <Checkbox color="orange" />
        <Checkbox color="green" />
        <Checkbox color="cyan" />
        <Checkbox color="blue" />
        <Checkbox color="magenta" />
      </div>
      <br/>
      <div style={{ display: "flex", flexFlow: "row", gap: 10 }}>
        <Checkbox color="red" defaultChecked />
        <Checkbox color="orange" defaultChecked />
        <Checkbox color="green" defaultChecked />
        <Checkbox color="cyan" defaultChecked />
        <Checkbox color="blue" defaultChecked />
        <Checkbox color="magenta" defaultChecked />
      </div>
    </>
  );
}

export default Home;