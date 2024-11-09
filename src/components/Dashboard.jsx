import { Link } from "react-router-dom";
import { DhasboardGridStats } from "./DashboardGridStats";
import { TransactionChart } from "./TransactionChart";
import {BuyerProfileChart} from "./BuyerProfileChart";
import {RecentOrders} from "./RecentOrders";
import {PopularProducts} from "./PopularProducts";

export function Dashboard(){
    return <div className="flex flex-col gap-4">
        <DhasboardGridStats/>
        <div className="flex flex-row gap-4 w-full">
            <TransactionChart/>
            <BuyerProfileChart/>
        </div>
        <div className="flex flex-row gap-4 w-full">
            <RecentOrders/>
            <PopularProducts/>
        </div>
    </div>
}