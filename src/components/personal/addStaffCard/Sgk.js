import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Sgk(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Sigorta Bilgileri</div>

                <FormGroup label="Sigorta Kolu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="SGB İş Kolu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Belge Türü">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="İşkur Meslek Kodu">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Görev Kodu">
                    <input className="cs-input" />
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">İletişim Bilgileri</div>

                <FormGroup label="Adres 1">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Ülke">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center pl-2">Şehir</div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="İlçe" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Mahalle">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bulvar">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Cadde - Sokak">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina Adı">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Daire No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Telefon No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Mobil No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Posta Kodu">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">&nbsp;&nbsp;&nbsp;</div>

                <FormGroup label="Adres 1">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Ülke">
                    <div className="grid grid-cols-3 gap-1 w-full">
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center pl-2">Şehir</div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8"></select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="İlçe" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Mahalle">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bulvar">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Cadde - Sokak">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina Adı">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Bina No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Daire No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Telefon No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>

                        <div className="flex items-center pl-2">Mobil No</div>

                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Posta Kodu">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative">
                            <input className="cs-input" />
                        </div>
                    </div>
                </FormGroup>
            </div>
        </div>
    );
}