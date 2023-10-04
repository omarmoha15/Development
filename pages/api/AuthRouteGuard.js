// AuthRouteGuard.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie'; // Import js-cookie

const AuthRouteGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated (e.g., by checking for a JWT token)
    const token = Cookies.get('jwt_token'); // Retrieve the JWT token from cookies

    if (!token) {
      // If the user is not authenticated, redirect to the login page
      router.push('/login');
    }
  }, []);

  return children;
};

export default AuthRouteGuard;
