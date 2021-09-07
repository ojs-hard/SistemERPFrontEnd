import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import PageSubscribe from '../../common/PageSubscribe';
import NavTabbar from '../../common/NavTabbar';


import Personal from './Personal';
import Study from './Study';
import General from './General';
import Credential from './Credential';
import Sgk from './Sgk';
import Salary from './Salary';
import Dynamic from './Dynamic';
import Other from './Other';


const tabItems = [
    {
        id: "general",
        text: "Genel Bilgiler",
        route: "/personal/add-staff-card/general"
    },
    {
        id: "study",
        text: "Çalışma Bilgileri",
        route: "/personal/add-staff-card/study"
    },
    {
        id: "credential",
        text: "Kimlik Bilgileri",
        route: "/personal/add-staff-card/credential"
    },
    {
        id: "sgk",
        text: "SGK Bilgileri",
        route: "/personal/add-staff-card/sgk"
    },
    {
        id: "salary",
        text: "Maaş ve Kesintiler",
        route: "/personal/add-staff-card/salary"
    },
    {
        id: "dynamic",
        text: "Dinamik", 
        route: "/personal/add-staff-card/dynamic"
    },
    {
        id: "other",
        text: "Diğer Bilgiler",
        route: "/personal/add-staff-card/other"
    }
];

export default function AddStaffCard(props) {
    return(
        <div className="p-3">
            <PageSubscribe text="Anasayfa > Personel Modülü > Personel Kartı Ekle" />
            
            <Personal />

            <div className="my-2 overflow-hidden">
                <NavTabbar
                    tabs={tabItems}
                    activeTabClassName="bg-gray-lightest" />

                <div className="border rounded-b-lg border-gray-normal bg-gray-lightest">
                    <Switch>
                        <Route path="/personal/add-staff-card/general" component={General} />

                        <Route path="/personal/add-staff-card/study" component={Study} />

                        <Route path="/personal/add-staff-card/credential" component={Credential} />

                        <Route path="/personal/add-staff-card/sgk" component={Sgk} />

                        <Route path="/personal/add-staff-card/salary" component={Salary} />

                        <Route path="/personal/add-staff-card/dynamic" component={Dynamic} />

                        <Route path="/personal/add-staff-card/other" component={Other} />

                        <Redirect to="/personal/add-staff-card/general" />
                    </Switch>
                </div>
            </div>

            <div className="flex justify-center">
                <button className="btn mx-1 px-6 bg-blue-500 text-white">Kaydet</button>

                <div className=" relative inline-block text-left dropdown">
                    <span className="rounded-md shadow-sm">
                        <button className="inline-flex btn px-6" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                            <span>Diğer</span>
                            <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </span>

                    <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                        <div className="absolute right-0 bottom-10 w-56 mt-2 origin-bottom-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                            <div className="py-1">
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="btn mx-1 px-6 bg-white border">Vazgeç</button>
            </div>
        </div>
    );
}