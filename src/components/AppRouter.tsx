import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../routes.js";




const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(item => {
                return <Route key={item.path} path={item.path} element={<item.Component/>}/>
            })}
        </Routes>
    );
}

export default AppRouter;
