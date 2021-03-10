import React from 'react';

import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { auth } = useAuth();

  return auth ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;