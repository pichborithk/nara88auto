import car from '../asset/car.png';

const Banner = () => {
  return (
    <div className='banner px-32 flex justify-between flex-col'>
      <h1 className='text-center pt-16'>Your Next Favorite Car</h1>

      <img src={car} alt='car' className='pt-16' />
    </div>
  );
};

export default Banner;
