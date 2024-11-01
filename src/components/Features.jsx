import React from 'react'
import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";
const Features = ({feature}) => {
    return (
        <div className='flex items-center gap-3'>
            <IoMdCheckmarkCircle className='text-blue-500'></IoMdCheckmarkCircle><p>{feature}</p>
        </div>
    )
};
Features.propTypes = {
    feature: PropTypes.object.string
}

export default Features;