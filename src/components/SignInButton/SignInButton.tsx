"use client"

import { Button, Typography } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { data: session } = useSession();
  const username = session?.user?.name;

  return (    
    <>
      <Button
        color="secondary"
        sx={{ display: "flex", gap: 1 }}
        onClick={() => username ? signOut() : signIn("github")}
      >
        <Typography>
          {
            username ?
            username :
            "Sign in"
          }
        </Typography>
        <GitHub fontSize="medium" />
      </Button>
    </>
  );
};

export default SignInButton;