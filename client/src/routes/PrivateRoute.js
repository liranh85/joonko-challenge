import { Redirect, Route } from 'react-router-dom';
import { checkIfAuthenticated } from 'routes/auth';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = checkIfAuthenticated();
  // TODO: get this to work
  console.log({ isAuthenticated });
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
