import React from 'react';
import PropTypes from 'prop-types';

export default function TableWrapper(props) {
    return(
        <React.Fragment>
            <div className="flex justify-between px-2 pb-1 border-b border-gray-normal">
                <div className="pt-1 text-base font-semibold text-gray-dark">{props.headerText}</div>

                <div className="flex justify-between">
                    <div className="flex">
                        <div className="relative flex items-center mr-8">
                            <select className="px-3 pt-1.5 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                <option>Son Eklenen</option>
                            </select>
                            <img alt="input icon" src={require('../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>

                        {props.showAdd &&
                            <div className="relative flex items-center mr-8">
                                <select className="px-3 pt-1.5 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                    <option>Ekle</option>
                                </select>
                                <img alt="input icon" src={require('../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                            </div>
                        }

                        <div className="relative flex items-center mr-8">
                            <select className="px-3 pt-1.5 bg-transparent border-0 appearance-none pr-8 focus:outline-none">
                                <option>Dışarı Aktar</option>
                            </select>
                            <img alt="input icon" src={require('../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <select className="cs-input appearance-none pr-8 w-16 py-1">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                                <option>50</option>
                                <option>All</option>
                            </select>
                            <img alt="input icon" src={require('../../images/icons/angle-down.png')} className="-ml-6 z-10" />
                        </div>
                        <div className="ml-6">Adet Göster</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full">
                        <div className="overflow-hidden">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

TableWrapper.defaultProps = {
    showAdd: true
}

TableWrapper.propTypes = {
    headerText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]),
    showAdd: PropTypes.bool
}