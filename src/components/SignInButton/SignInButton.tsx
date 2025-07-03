"use client"

import { Avatar, Button, Typography } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { signIn, signOut, useSession } from "next-auth/react";
import { useMediaQuery } from "@mui/material";

const SignInButton = () => {
  const { data: session } = useSession();

  const username = session?.user?.name;
  const pfpUrl = session?.user?.image;

  const mobile = useMediaQuery("(max-width: 700px)");

  return (    
    <>
      <Button
        color={mobile ? "secondary" : "primary"}
        sx={{ 
          display: "flex", 
          gap: 1
        }}
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
        <Avatar 
          src={pfpUrl} 
          sx={{ 
            width: 40, 
            height: 40, 
            boxShadow: mobile ? "var(--cyan-200-neon)" : "var(--magenta-200-neon)"
          }} 
        />
      }
    </>
  );
};

export default SignInButton;