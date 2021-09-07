import React from 'react';
import FormGroup from '../../common/FormGroup';

export default function Study(props) {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Ödeme Bilgileri</div>

                <FormGroup label="Maaş">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="0">
                                <option value="1">Brüt</option>
                                <option value="0">Net</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8">
                                <option value="53">TL</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="" className="mt-3">
                    <input id="asgari" name="asgari" type="checkbox"
                        className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                    <label htmlFor="asgari" className="block text-sm">Asgari Ücretli</label>
                </FormGroup>

                <FormGroup label="Ödeme Şekli" className="mt-3">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex col-span-2 items-center">
                            <select className="cs-input pr-8" defaultValue="1">
                                <option val="1">Ödeme Şekli</option>
                            </select>
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option val="1">Ödeme Periyod</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>
            
                <FormGroup label="Banka Adı">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Şube Adı">
                    <input className="cs-input" />
                </FormGroup>
                
                <FormGroup label="Hesap No / IBAN">
                    <input className="cs-input" />
                </FormGroup>


                <FormGroup label="Mesai Günleri" icon={require('../../../images/icons/search.png')}>
                    <input className="cs-input pr-8" />
                </FormGroup>


                <div className="p-2 text-base font-semibold lg:mt-8 text-gray-dark">Personel Tarafından Ödenen Sabit Primler </div>

                <FormGroup label="BES" icon={require('../../../images/icons/calculator.png')} >
                    <input className="cs-input"/>
                </FormGroup>

                <FormGroup label="Özel Sağlık Sigortası" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Personel Tarafından Ödenen Sabit Primler </div>

                <FormGroup label="A.G.İ. Hesaplansın" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="1">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>
                
                <FormGroup label="Eşi Çalışıyor mu?" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="0">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>
                
                <FormGroup label="Eşinin Geliri Var mı?" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="0">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>

                <FormGroup label="Gelire İlişkin Bilgi">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="A.G.İ. Çocuk Sayısı" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Diğer Çocuk Sayısı" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>


                <div className="p-2 text-base font-semibold lg:mt-20 text-gray-dark">İşveren Tarafından Ödenen Sabit Primler</div>

                <FormGroup label="BES" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Özel Sağlık Sigortası" icon={require('../../../images/icons/calculator.png')}>
                    <input className="cs-input" />
                </FormGroup>
            </div>

            <div>
                <div className="p-2 text-base font-semibold text-gray-dark">Kanun ve Muafiyetler</div>

                <FormGroup label="Tabi Olduğu Kanun" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Gelir Vergisi">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option value="1">Evet</option>
                                <option value="0">Hayır</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center pl-2">GV Muafiyet</div>

                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="" className="mt-3 mb-3">
                    <input id="GVMuafiyeti" name="GVMuafiyeti" type="checkbox"
                        className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                    <label htmlFor="GVMuafiyeti" className="block text-sm">GV Muafiyeti Nete Ekle</label>
                </FormGroup>

                <FormGroup label="SGK" icon={require('../../../images/icons/angle-down.png')}>
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option value="1">Evet</option>
                                <option value="0">Hayır</option>
                            </select>

                </FormGroup>

                <FormGroup label="UVSK İşveren">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center pl-2">UVSK İşçi</div>
                        
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="GSS İşveren">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center pl-2">GSS İşçi</div>
                        
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="KVSK işveren">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="İşsizlik">
                    <div className="grid grid-cols-3 gap-1">
                        
                    <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option value="1">Evet</option>
                                <option value="0">Hayır</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" placeholder="İşveren" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                        
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" placeholder="İşçi" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Damga">
                    <div className="grid grid-cols-3 gap-1">
                        
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option value="1">Evet</option>
                                <option value="0">Hayır</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="flex items-center ml-2">Damga Vergisi</div>
                        
                        <div className="relative flex items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calculator.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

            </div>
        </div>
    );
}