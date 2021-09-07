import React from 'react';
import FormGroup from '../../common/FormGroup';
import ExpandableBox from '../../common/ExpandableBox';

export default function Personal(props) {
    return(
        <ExpandableBox headerText="Personel Kartı Ekle">
            <div className="p-2 font-semibold text-base text-gray-dark">Personel Bilgileri</div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 py-1 px-2 gap-x-6">
                <FormGroup label="Şube" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Adı">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Departman" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Sicil No">
                    <input className="cs-input" />
                </FormGroup>

                <FormGroup label="Soyadı">
                    <input className="cs-input" />
                </FormGroup>
                
                <FormGroup label="Görev" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>

                <FormGroup label="Yetki Kodu" icon={require('../../../images/icons/search.png')}>
                    <input className="cs-input pr-8" />
                </FormGroup>

                <FormGroup label="T.C. Kimlik No">
                    <input className="cs-input" />
                </FormGroup>
                
                <FormGroup label="Ünvan" icon={require('../../../images/icons/angle-down.png')}>
                    <select className="cs-input appearance-none"></select>
                </FormGroup>
            </div>
        </ExpandableBox>
    );
}