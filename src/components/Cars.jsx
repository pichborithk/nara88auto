import CarCard from './CarCard';
import { cars } from '../utils/constants';

const Cars = () => {
  return (
    <div className='grid gap-4 grid-cols-4 px-32 py-6'>
      {cars.map((item, idx) => (
        <div key={idx}>
          <CarCard
            brand={item.brand}
            model={item.model}
            imageUrl={item.imageUrl}
            price={item.price}
            miles={item.miles}
          />
        </div>
      ))}
    </div>
  );
};

export default Cars;
