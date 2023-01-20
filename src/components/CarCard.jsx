const CarCard = ({ brand, model, price, miles, imageUrl }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg shadow-gray-300 hover:scale-105'>
      <img className='h-60 px-2' src={imageUrl} alt='Sunset in the mountains' />
      <div className='px-6 py-4 h-36'>
        <div className='flex justify-between'>
          <p className='font-bold text-xl mb-2'>{brand}</p>
          <p className='font-bold text-xl mb-2'>{`$ ${price}`}</p>
        </div>
        <p className='font-bold text-base mb-2'>{model}</p>
        <p className='text-gray-700 text-base'>{miles}</p>
      </div>
    </div>
  );
};

export default CarCard;
