import {IoBagHandle, IoPieChart, IoCartSharp} from "react-icons/io5"
import { MdGroup } from "react-icons/md";

export function DhasboardGridStats(){
    return <div className="flex gap-4 w-full">
        <BoxWrapper>
            <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
                <IoBagHandle className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="font-light text-sm text-gray-500">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl font-semibold text-gray-700">$3455.60</strong>
                    <span className="text-green-500 pl-2">+234</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-500">
                <IoPieChart className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="font-light text-sm text-gray-500">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl font-semibold text-gray-700">$3455.60</strong>
                    <span className="text-red-500 pl-2">-234</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
                <MdGroup className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="font-light text-sm text-gray-500">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl font-semibold text-gray-700">$3455.60</strong>
                    <span className="text-green-500 pl-2">+234</span>
                </div>
            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
                <IoCartSharp className="text-2xl text-white"/>
            </div>
            <div className="pl-4">
                <span className="font-light text-sm text-gray-500">Total Sales</span>
                <div className="flex items-center">
                    <strong className="text-xl font-semibold text-gray-700">$3455.60</strong>
                    <span className="text-red-500 pl-2">-234</span>
                </div>
            </div>
        </BoxWrapper>
    </div>
}

function BoxWrapper({children}){
    return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}