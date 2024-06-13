import { AppBar, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FC } from 'react';
import { useAuth } from '../context/AuthContext';
import { Logo } from './shared/Logo';
import { NavigationLink } from './shared/NavigationLink';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  const theme = useTheme();

  const auth = useAuth();
  return (
    <AppBar sx={{ bgcolor: 'darkblue' }}>
      <Toolbar>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg={theme.palette.primary.light}
                textColor='white'
                to={'/chat'}
                text='Go to Chat'
              />
              <NavigationLink
                bg={theme.palette.secondary.dark}
                textColor='white'
                to={'/'}
                text='Logout'
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg='white'
                textColor='black'
                to={'/login'}
                text='Login'
              />
              <NavigationLink
                bg='black'
                textColor='white'
                to={'/signup'}
                text='Signup'
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
