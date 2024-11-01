import PropTypes from 'prop-types';
import Feature from './Features';


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='mt-5 flex flex-col rounded-md bg-green-300 p-4 font-bold text-black'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='my-8 text-center text-3xl'>{name}</h4>
            <div className='flex-grow pl-20'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='py-25 font-bold- mt-12 h-12 w-full rounded-lg bg-green-600 hover:bg-green-950'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;