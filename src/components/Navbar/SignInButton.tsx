"use client"

import { Avatar } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components";

const SignInButton = () => {
  const { data: session } = useSession();

  const username = session?.user?.name;
  const pfpUrl = session?.user?.image;

  const mobile = false;

  return (    
    <>
      <Button
        color={mobile ? "cyan" : "magenta"}
        onClick={() => username ? signOut() : signIn("github")}
      >
        {
          username ? username : <>Sign in <GitHub /></>
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