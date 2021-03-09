import React, { useContext }  from 'react';

import AuthContext from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { auth } = React.useContext(AuthContext);

  return auth ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;