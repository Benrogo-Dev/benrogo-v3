import { Avatar, Typography } from "@mui/material";
import type { Metadata } from "next";
import { auth } from "@/auth";

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
          <Typography fontSize={20}>{user.name || user.email}</Typography>
        </div>
      )}
    </>
  );
}

export default Home;