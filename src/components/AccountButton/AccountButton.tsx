import * as React from 'react';
import Icon from '@mdi/react';
import styles from './AccountButton.module.css';
import { Button } from '@/components';
import { mdiGithub } from '@mdi/js';
import { signIn, signOut, useSession } from 'next-auth/react';

const AccountButton = () => {
  const { data: session } = useSession();
  const pfpUrl = session?.user?.image;

  return (
    <Button
      color="cyan"
      onClick={() => session ? signOut() : signIn('github')}
    >
      {
        session ? 'Sign Out' : 'Sign In'
      }
      {
        pfpUrl ? (
          <img src={pfpUrl} className={styles.AccountButtonProfilePicture} alt="Profile picture" />
        ) : (
          <Icon
            path={mdiGithub}
            size={1}
          />
        )
      }
    </Button>
  );
};

export default AccountButton;