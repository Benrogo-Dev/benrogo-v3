import { Avatar, Typography } from "@mui/material";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { Checkbox } from "@/components";

export const metadata: Metadata = {
  title: "Dashboard"
};

export const runtime = "edge";

const Home = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <>
      <Typography fontSize={40}>Dashboard</Typography>
      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
          {user.image && (
            <Avatar src={user.image} alt="GitHub avatar" sx={{boxShadow: "var(--magenta-300-neon)"}} />
          )}
          <Typography fontSize={20}>{user.name}</Typography>
          <Typography fontSize={20}>{user.email}</Typography>
          <Typography fontSize={20}>{user.id}</Typography>
          <Typography fontSize={20}>{user.image}</Typography>
        </div>
      )}
      <div style={{ display: "flex", flexFlow: "row", gap: 10 }}>
        <Checkbox color="scarlet" />
        <Checkbox color="orange" />
        <Checkbox color="green" />
        <Checkbox color="cyan" />
        <Checkbox color="blue" />
        <Checkbox color="magenta" />
      </div>
      <br/>
      <div style={{ display: "flex", flexFlow: "row", gap: 10 }}>
        <Checkbox color="scarlet" defaultChecked />
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