"use client"

import { Avatar, Button, Typography } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import { signIn, signOut, useSession } from "next-auth/react";

interface SignInButtonProps {
  isNavExpanded?: boolean;
}

const SignInButton = ({ isNavExpanded = false }: SignInButtonProps) => {
  const { data: session } = useSession();

  const username = session?.user?.name;
  const pfpUrl = session?.user?.image;

  return (    
    <>
      <Button
        color="secondary"
        sx={{ 
          display: "flex", 
          gap: 1,
          '@media (max-width: 600px)': {
            borderColor: isNavExpanded ? 'var(--magenta-300)' : 'var(--cyan-200)',
            boxShadow: isNavExpanded ? 'var(--magenta-300-neon)' : 'var(--cyan-300-neon)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              borderColor: isNavExpanded ? 'var(--magenta-200)' : 'var(--cyan-300)',
              backgroundColor: isNavExpanded ? 'var(--magenta-500)' : 'var(--cyan-500)',
            }
          }
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
            boxShadow: "var(--cyan-200-neon)",
            '@media (max-width: 600px)': {
              boxShadow: isNavExpanded ? 'var(--magenta-300-neon)' : 'var(--cyan-200-neon)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }
          }} 
        />
      }
    </>
  );
};

export default SignInButton;