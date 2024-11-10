import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Appbar } from "./Appbar";


export function Layout(){
    return <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar/>
            <div className="flex flex-col flex-1">
                <Appbar/>
                <div className="p-4 overflow-scroll">{<Outlet/>}</div>
            </div>
        </div>
}