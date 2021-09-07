import React from 'react';
import FormGroup from '../../common/FormGroup';


export default function AddressBilling(props) {
    return(
        <React.Fragment>
            <div className="p-2 font-semibold text-base text-gray-dark">İletişim Bilgileri</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Adres 1">
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Ülke">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Şehir</div>

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
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Daire No</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Telefon No">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Mobil No</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Posta Kodu">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Bölge</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Adres 2">
                        <input className="cs-input" />
                    </FormGroup>

                    <FormGroup label="Ülke">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Şehir</div>

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
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Daire No</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Telefon No">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Mobil No</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Posta Kodu">
                        <div className="grid grid-cols-3 gap-1 w-full">
                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>

                            <div className="relative flex items-center pl-2">Bölge</div>

                            <div className="relative flex items-center">
                                <select className="cs-input appearance-none pr-8"></select>
                                <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        </div>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}