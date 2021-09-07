import React, { useState } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import PageSubscribe from '../../common/PageSubscribe';
import NavTabbar from '../../common/NavTabbar';
import Tabbar from '../../common/Tabbar';

import GeneralInformation from './GeneralInformation';
import AddressBilling from './AddressBilling';
import AddressOther from './AddressOther';

import Codes from './Codes';
import Other from './Other';
import RiskInformation from './RiskInformation';
import AdditionalRiskInformation from './AdditionalRiskInformation';
import Bank from './Bank';
import Authorities from './Authorities';
import EGovernment from './EGovernment';
import Producer from './Producer';
import MaturityInformation from './MaturityInformation';
import B2BB2C from './B2BB2C';
import ReportDesigns from './ReportDesigns';
import CargoInformation from './CargoInformation';


const tabItems = [
    { id: "address_billing", text: "Fatura Adresi" },
    { id: "address_other", text: "Diğer Adresler" }
];

const navTabItems = [
    { id: "codes", text: "Kodlar", route: "/current-account/add/codes" },
    { id: "other", text: "Diğer", route: "/current-account/add/other" },
    { id: "risk_information", text: "Risk Bilgileri", route: "/current-account/add/risk-information" },
    { id: "additional_risk_information", text: "Ek Risk Bilgileri", route: "/current-account/add/additional-risk-information" },
    { id: "bank", text: "Banka", route: "/current-account/add/bank" },
    { id: "authorities", text: "Yetkililer", route: "/current-account/add/authorities" },
    { id: "e_government", text: "E-Devlet", route: "/current-account/add/e-government" },
    { id: "producer", text: "Müstahsil", route: "/current-account/add/producer" },
    { id: "maturity_information", text: "Vade Bilgileri", route: "/current-account/add/maturity-information" },
    { id: "b2b_b2c", text: "B2B / B2C", route: "/current-account/add/b2b-b2c" },
    { id: "report_designs", text: "Rapor Tasarımları", route: "/current-account/add/report-designs" },
    { id: "cargo_information", text: "Kargo Bilgileri", route: "/current-account/add/cargo-information" }
];

export default function AddCurrentAccount(props) {
    const [activeTab, setActiveTab] = useState('address_billing');
    return(
        <React.Fragment>
            <PageSubscribe text="Anasayfa > Cari Kart Modülü > Cari Kart Ekle" />
            
            <GeneralInformation />

            <div className="my-2">
                <Tabbar
                    tabs={tabItems}
                    activeTabClassName="bg-gray-lightest"
                    activeTab={activeTab}
                    setActiveTab={(tab) => setActiveTab(tab.id)} />

                <div className="border rounded-lg border-gray-normal bg-gray-lightest">
                    {activeTab === 'address_billing' &&
                        <AddressBilling />
                    }
                    {activeTab === 'address_other' &&
                        <AddressOther />
                    }
                </div>
            </div>

            <div className="my-2 overflow-hidden">
                <NavTabbar
                    tabs={navTabItems}
                    activeTabClassName="bg-gray-lightest" />

                <div className="border rounded-b-lg border-gray-normal bg-gray-lightest">
                    <Switch>
                        <Route path="/current-account/add/codes">
                            <Codes />
                        </Route>

                        <Route path="/current-account/add/other">
                            <Other />
                        </Route>

                        <Route path="/current-account/add/risk-information">
                            <RiskInformation />
                        </Route>

                        <Route path="/current-account/add/additional-risk-information">
                            <AdditionalRiskInformation />
                        </Route>

                        <Route path="/current-account/add/bank">
                            <Bank />
                        </Route>

                        <Route path="/current-account/add/authorities">
                            <Authorities />
                        </Route>

                        <Route path="/current-account/add/e-government">
                            <EGovernment />
                        </Route>

                        <Route path="/current-account/add/producer">
                            <Producer />
                        </Route>

                        <Route path="/current-account/add/maturity-information">
                            <MaturityInformation />
                        </Route>

                        <Route path="/current-account/add/b2b-b2c">
                            <B2BB2C />
                        </Route>

                        <Route path="/current-account/add/report-designs">
                            <ReportDesigns />
                        </Route>

                        <Route path="/current-account/add/cargo-information">
                            <CargoInformation />
                        </Route>

                        <Redirect to="/current-account/add/codes" />
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
        </React.Fragment>
    );
}