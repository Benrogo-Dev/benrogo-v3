"use client"

import { Avatar, Button, Typography } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();

  const username = session?.user?.name;
  const pfpUrl = session?.user?.image;

  return (    
    <>
      <Button
        color="secondary"
        sx={{ display: "flex", gap: 1 }}
        onClick={() => username ? signOut() : signIn("github")}
      >
        {
          username ? (
            <>
              <Typography>
                {username}
              </Typography>
            </>
          ) : (
            <>
              <Typography>
                Sign in
              </Typography>
              <GitHub fontSize="medium" />
            </>
          )
        }
      </Button>
      {
        pfpUrl &&
        <Avatar src={pfpUrl} sx={{ width: 40, height: 40, boxShadow: "var(--cyan-200-neon)" }} />
      }
    </>
  );
};

export default SignInButton;