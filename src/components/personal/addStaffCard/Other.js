import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Other(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
            <div>
                <FormGroup label="S.G. Kuruluşu" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Emekli Sandık  No">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Sandık Kodu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bağkur No">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Sandık Sicil No.">
                    <input className="cs-input" />
                </FormGroup>
            </div>

            <div>
                <FormGroup label="Referans" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                    <label className="p-2 col-span-3 ellipsis">Önceki Çalışma Süresi</label>
                    <div className="col-span-4 relative flex items-center">
                        <input className="cs-input" />
                        <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                    </div>
                </div>

                <FormGroup label="Önceki İş Yeri-1">
                    <input className="cs-input" />
                </FormGroup>

                <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                    <label className="p-2 col-span-3 ellipsis">Önceki İş Yeri Adresi-1</label>
                    <div className="col-span-4 relative flex items-center">
                        <input className="cs-input" />
                    </div>
                </div>

                <FormGroup label="Önceki İş Yeri-2">
                    <input className="cs-input" />
                </FormGroup>

                <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex items-center">
                    <label className="p-2 col-span-3 ellipsis">Önceki İş Yeri Adresi-2</label>
                    <div className="col-span-4 relative flex items-center">
                        <input className="cs-input" />
                    </div>
                </div>

                <div className="mb-1 grid sm:grid-cols-1 md:grid-cols-7 flex">
                    <label className="p-2 col-span-2 ellipsis">Not</label>
                    <div className="col-span-5 relative flex items-center">
                        <textarea className="cs-input" rows="3"></textarea>
                    </div>
                </div>
            </div>

            <div>
                <FormGroup label="Eğitim Tazminatı" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Aile Yardımı" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Yemek Parası">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative">
                            <input className="cs-input pr-8" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Çocuk Parası">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center pl-2">Çocuk Sayısı</div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}