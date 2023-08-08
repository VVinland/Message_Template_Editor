import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../routes.tsx";
import { MAIN_MENU, MESSAGE_TEMPLATE_EDITOR } from "../utils/consts.tsx";
import { RouteItems } from "../interfaces.ts";
import { callbackSave, getArrVarNames, getTemplate } from "../utils/helpers/functions.ts";
import { useEffect } from "react";

const AppRouter = () => {
    
    return (
        <Routes>
            {publicRoutes.map((item: RouteItems) => {
                if (item.path === MESSAGE_TEMPLATE_EDITOR) {
                    return <Route key={item.path}
                        path={item.path}
                        element={<item.Component
                            callbackSave={callbackSave}
                            template={getTemplate()}
                            arrVarNames={getArrVarNames()} />}
                    />
                }
                return <Route key={item.path} path={item.path} element={<item.Component />} />
            })}
            <Route path="*" element={<Navigate to={MAIN_MENU} />} />
        </Routes>
    );
}

export default AppRouter;
