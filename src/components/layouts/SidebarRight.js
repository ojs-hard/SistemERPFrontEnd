import React from 'react';
import TooltipLeft from '../common/TooltipLeft';

export default function SidebarRight(props) {

    return(
        <div className={"w-13 border-l border-gray-normal flex flex-col items-center flex-none box-border bg-gray-lightest fixed right-0 top-0 z-20 h-full"}>
            <div className="flex-none w-full h-13 p-2 border-b border-gray-normal">
                <div className="rounded flex justify-center items-center text-center h-full w-full bg-gray-normal text-gray-darkest font-bold">
                    EG
                </div>
            </div>

            <TooltipLeft text="Mail">
                <img alt="Mail" src={require('../../images/icons/c-mail.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Mail From">
                <img alt="Mail From" src={require('../../images/icons/c-mail-from.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Calendar">
                <img alt="Calendar" src={require('../../images/icons/c-calendar.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Phone">
                <img alt="Phone" src={require('../../images/icons/c-phone.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>


            <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

            <TooltipLeft text="Calculator">
                <img alt="Calculator" src={require('../../images/icons/c-calculator.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>


            <hr className="w-full m-0 border-b border-t-0 border-gray-normal" />

            <TooltipLeft text="Eye">
                <img alt="Eye" src={require('../../images/icons/c-eye.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

            <TooltipLeft text="Lock">
                <img alt="Lock" src={require('../../images/icons/c-lock.png')} className="p-2 cursor-pointer" />
            </TooltipLeft>

        </div>
    );
}