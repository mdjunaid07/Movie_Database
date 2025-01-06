import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from "../firebase";

const PrivateRoute = ({children}) => {

    const [user, loading, error] = useAuthState(auth);

    console.log(user);

    if (loading) {
        return (
          <div>
            <p>Initialising User...</p>
          </div>
        );
    }

    if (error) {
        return (
          <div>
            <p>Error: {error}</p>
          </div>
        );
    }

    return user ? children : <Navigate to="/signin" />

}

export default PrivateRoute;