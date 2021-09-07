import React, { useState } from 'react';

import FormGroup from '../../common/FormGroup';
import GeneralBusinessCodeModal from './GeneralBusinessCodeModal';
import ReasonForLeavingModal from './ReasonForLeavingModal';


export default function General(props) {
    const [photo, setPhoto] = useState(null);
    const [isBusinessCodeModalOpen, setBusinessCodeModalOpen] = useState(false);
    const [isReasonForLeavingModalOpen, setReasonForLeavingModalOpen] = useState(false);

    const handlePhotoChange = (event) => {
        setPhoto(URL.createObjectURL(event.target.files[0]));
    }

    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
            <div>
                <FormGroup
                    label="Vergi Dairesi"
                    icon={require('../../../images/icons/search.png')}
                    iconclick={() => setBusinessCodeModalOpen(true)}
                    iconClassName="cursor-pointer">
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Vergi No">
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Sigorta No">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative col-span-2">
                            <input className="cs-input pr-8" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8">
                                <option>Seçiniz</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="Sözleşme Şekli" icon={require('../../../images/icons/angle-down.png')}>
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Sözleşme Bitiş" icon={require('../../../images/icons/calendar.png')}>
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="İşe Başlama Tarihi">
                    <div className="grid grid-cols-3 gap-1">
                        <div className="relative flex col-span-2 items-center">
                            <input className="cs-input pr-8" />
                            <img alt="input icon" src={require('../../../images/icons/calendar.png')} className="-ml-6 z-10" />
                        </div>

                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8" defaultValue="1">
                                <option val="1">Çalışıyor</option>
                                <option val="0">Çalışmıyor</option>
                            </select>
                            <img alt="input icon" src={require('../../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>
                </FormGroup>

                <FormGroup label="İşten Ayrılış Tarihi" icon={require('../../../images/icons/calendar.png')}>
                    <input className="cs-input pr-8" disabled />
                </FormGroup>

                <FormGroup
                    label="İşten Ayrılış Nedeni"
                    icon={require('../../../images/icons/search.png')}
                    iconclick={() => setReasonForLeavingModalOpen(true)}
                    iconClassName="cursor-pointer">
                    <input className="cs-input pr-8" disabled />
                </FormGroup>

                <FormGroup label="Mesleği" >
                    <input className="cs-input pr-8" />
                </FormGroup>
            </div>

            <div>
                <FormGroup label="Öğrenim Durumu" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Mezun Olunan Okul">
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Mezun Olunan Bölüm">
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Mezuniyet Tarihi" icon={require('../../../images/icons/calendar.png')}>
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="Askerlik Durumu" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Engellilik Derecesi" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Eng. İndirimi Uygunlansın" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="0">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>

                <FormGroup label="Eski Hükümlü" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="0">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>

                <FormGroup label="Terör Maduru" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none" defaultValue="0">
                        <option value="1">Evet</option>
                        <option value="0">Hayır</option>
                    </select>
                </FormGroup>
            </div>

            <div>
                <FormGroup label="Grup Kodu" icon={require('../../../images/icons/search.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Cari Kodu" icon={require('../../../images/icons/search.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <div className="float-right">
                    <div className="border border-gray-dark rounded bg-white mb-1 relative w-24 h-24">
                        {photo && <img alt="Preview" src={photo} className="w-full h-full" />}
                        <div className="rounded bg-blue-500 w-8 h-8 absolute bottom-0 right-0 p-2 cursor-pointer" onClick={() => setPhoto(null)}>
                            <img alt="Trash Icon" src={require('../../../images/icons/trash.png')} className="w-full h-full" />
                        </div>
                    </div>

                    <div className="overflow-hidden relative w-24">
                        <button className="btn w-full whitespace-nowrap px-0 text-center cursor-pointer">
                            Fotoğraf Seç
                        </button>
                        <input className="cursor-pointer absolute block opacity-0 top-0 left-0 w-full h-full" type="file" name="photo" onChange={handlePhotoChange} />
                    </div>
                </div>
            </div>

            {isBusinessCodeModalOpen &&
                <GeneralBusinessCodeModal onClose={() => setBusinessCodeModalOpen(false)} />
            }
            {isReasonForLeavingModalOpen &&
                <ReasonForLeavingModal onClose={() => setReasonForLeavingModalOpen(false)} />
            }
        </div>
    );
}