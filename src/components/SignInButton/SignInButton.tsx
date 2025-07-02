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
        variant={username ? "outlined" : "contained"}
        sx={{ 
          display: "flex", 
          gap: 1,
          borderRadius: 3,
          textTransform: "none",
          fontWeight: "bold",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          backdropFilter: "blur(8px)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: username 
              ? "var(--cyan-200-neon), 0 4px 15px color-mix(in oklab, var(--cyan-200) 20%, transparent 80%)"
              : "var(--magenta-300-neon), 0 4px 15px color-mix(in oklab, var(--magenta-300) 25%, transparent 75%)",
          },
          "&:active": {
            transform: "translateY(-1px)",
          }
        }}
        onClick={() => username ? signOut() : signIn("github")}
      >
        {
          username ? (
            <>
              <Typography sx={{ fontWeight: "bold" }}>
                {username}
              </Typography>
            </>
          ) : (
            <>
              <Typography sx={{ fontWeight: "bold" }}>
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
            boxShadow: "var(--cyan-200-neon)",
            border: "2px solid var(--cyan-200)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "var(--cyan-100-neon)",
            }
          }} 
        />
      }
    </>
  );
};

export default SignInButton;