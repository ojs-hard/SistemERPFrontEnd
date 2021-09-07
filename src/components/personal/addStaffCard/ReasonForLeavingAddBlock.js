import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { slideInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import DropUp from '../../common/DropUp';
import FormGroup from '../../common/FormGroup';

const styles = {
    slideInRight: {
        animation: 'x .3s',
        animationName: Radium.keyframes(slideInRight, 'slideInRight')
    }
}

function ReasonForLeavingAddBlock(props) {
    return (
        <StyleRoot>
            <div className="fixed z-40 inset-0 overflow-y-auto" style={styles.slideInRight}>
                <div className="flex min-h-screen sm:block sm:p-0 h-full">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={props.onClose}></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    
                    <div className={`absolute top-0 right-0 block bg-white shadow-xl transform transition-all h-full p-3 w-96 flex flex-col justify-between`}>
                        <div>
                            <div className="px-2 pb-1 border-b-2 border-gray-normal my-2">
                                <h5 className="text-lg font-semibold text-gray-dark">İşten Ayrılma Nedeni Ekle</h5>
                            </div>

                            <div className="border rounded-lg border-gray-normal bg-gray-lightest p-2 pb-1">

                                <FormGroup label="Değer">
                                    <textarea className="cs-input" rows="3"></textarea>
                                </FormGroup>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="btn mx-1 px-6 bg-blue-500 text-white">Kaydet</button>

                            <DropUp text="Diğer">
                                <div className="py-1">
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item First</a>
                                    <a href="" tabIndex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem">Item Second</a>
                                </div>
                            </DropUp>
                            
                            <button className="btn mx-1 px-6 bg-white border" onClick={props.onClose}>Vazgeç</button>
                        </div>
                    </div>
                </div>
            </div>
        </StyleRoot>
    );
}

ReasonForLeavingAddBlock.defaultProps = {
    onClose: () => {}
}

ReasonForLeavingAddBlock.propTypes = {
    onClose: PropTypes.func
}

export default (props) => ReactDOM.createPortal(<ReasonForLeavingAddBlock {...props} />, document.getElementById('modal-root'));