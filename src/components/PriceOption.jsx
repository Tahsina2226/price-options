
import PropTypes from 'prop-types';


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-green-300 mt-6 p-4 rounded-md text-white'>
            <h2 className='text-center'>
                <span className='font-extrabold text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='my-8 text-3xl text-center'>{name}</h4>
          
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
