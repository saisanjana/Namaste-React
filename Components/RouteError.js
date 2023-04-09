import { useRouteError } from "react-router-dom";

const RouteError = () => {
    const routeError = useRouteError();
    return <div>{routeError.message}</div>
}

export default RouteError;