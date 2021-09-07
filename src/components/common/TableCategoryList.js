import React from 'react';
import PropTypes from 'prop-types';

export default function TableCategoryList(props) {
    return(
        <div className="flex flex-col mr-1 w-28">
            {props.list.map((item, index) =>
                <div className="py-2 text-center flex flex-col bg-gray-300 rounded mb-1" key={index}>
                    <i className="fa fa-copy text-lg text-white"></i>
                    <div className="text-base text-nowrap">{item.text}</div>
                </div>
            )}
        </div>
    );
}

TableCategoryList.propTypes = {
    list: PropTypes.array
}