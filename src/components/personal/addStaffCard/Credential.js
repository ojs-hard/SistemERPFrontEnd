import React from 'react';

import FormGroup from '../../common/FormGroup';

export default function Credential(props) {
    return(
        <React.Fragment>
            <div className="p-2 text-base font-semibold text-gray-dark">Personel Tarafından Ödenen Sabit Primler</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <div>
                    <FormGroup label="Baba Adı">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Anne Adı">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cinsiyet">
                        <div className="grid grid-cols-2 gap-1 w-full">
                            <div className="flex items-center">
                                <input id="kadin" name="kadin" type="checkbox"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                <label htmlFor="kadin" className="text-sm">Kadın</label>
                            </div>

                            <div className="flex items-center">
                                <input id="erkek" name="erkek" type="checkbox"
                                    className="h-4 w-4 focus:ring-indigo-400 focus:outline-none rounded mr-2" />
                                <label htmlFor="erkek" className="text-sm">Erkek</label>
                            </div>
                        </div>
                    </FormGroup>

                    <FormGroup label="Medeni Hali" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Doğum Yeri" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Doğum Tarihi" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Uyruk">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Ehliyet Durumu" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="E-Posta">
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="Seri No">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Cilt No">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Sıra No">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Aile Sıra No">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Kayıt No.">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Hes Kodu">
                        <input className="cs-input pr-8" />
                    </FormGroup>
                </div>

                <div>
                    <FormGroup label="İl" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="İlçe" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>

                    <FormGroup label="Mahalle - Köy">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Verildiği Yer" icon={require('../../../images/icons/calendar.png')}>
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Veriliş Tarihi">
                        <input className="cs-input pr-8" />
                    </FormGroup>

                    <FormGroup label="Veriliş Nedeni" icon={require('../../../images/icons/angle-down.png')}>
                        <select className="cs-input appearance-none"></select>
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
}