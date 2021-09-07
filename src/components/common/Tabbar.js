import React from 'react';
import PropTypes from 'prop-types';

export default function Tabbar(props) {
    const activeTabClass = 'cursor-pointer text-lg flex items-center justify-between w-42  bg-white border-l border-t border-r border-gray-normal rounded-t px-2 pt-1 pb-3 font-semibold ' + props.activeTabClassName;

    const inActiveTabClass = 'cursor-pointer text-lg flex items-center justify-between w-42 bg-gray-300 rounded px-2 py-1';
    return(
        <ul className="flex">
            {props.tabs.map(tab => {
                const curTab = typeof(tab) === 'string' ? {id: tab, text: tab} : tab;

                const isActive = props.activeTab === curTab.id;
                return(
                    <li key={curTab.id} className={`flex mx-1 ${isActive ? 'flex-col-reverse -mb-px' : 'py-2'}`}>
                        <div className={isActive ? activeTabClass : inActiveTabClass} onClick={() => props.setActiveTab(tab)}>
                            <span className="text-gray-dark">{curTab.text}</span>
                            
                            {props.showElipsis &&
                                <span className="text-gray-dark">•••</span>
                            }
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

Tabbar.defaultProps = {
    showElipsis: false,
    setActiveTab: () => {},
    activeTabClassName: ''
}


Tabbar.propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    showElipsis: PropTypes.bool,
    setActiveTab: PropTypes.func,
    activeTabClassName: PropTypes.string
}