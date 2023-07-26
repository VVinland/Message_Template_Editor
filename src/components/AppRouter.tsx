import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes.tsx";
import { MAIN_MENU } from "../utils/consts.tsx";



const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(item => {
                return <Route key={item.path} path={item.path} element={<item.Component />} />
            })}
            <Route path="*" element={<Navigate to={MAIN_MENU} />} />
        </Routes>
    );
}

export default AppRouter;
