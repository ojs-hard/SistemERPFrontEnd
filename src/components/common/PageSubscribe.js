import React from 'react';
import PropTypes from 'prop-types';

export default function PageSubscribe(props) {
    return(
        <div className={`mb-3 flex justify-between text-gray-dark px-1 ${props.className}`}>
            <span>{props.text}</span>
            <span>10.02.2021 Pazartesi 12:45</span>
        </div>
    );
}

PageSubscribe.defaultProps = {
    text: "",
    className: ""
}

PageSubscribe.propTypes = {
    className: PropTypes.string
}