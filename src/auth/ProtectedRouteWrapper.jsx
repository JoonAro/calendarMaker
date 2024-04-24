import {Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function ProtectedRouteWrapper ({element: Component, ...rest}){
    return(
        <Route {...rest}
        element={
            <ProtectedRoute>
                <Component />
            </ProtectedRoute>
         
        }
        />
    )
}
export default ProtectedRouteWrapper;