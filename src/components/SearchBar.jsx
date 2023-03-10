const SearchBar = () => {
  return (
    <label className='relative block w-72'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-8 h-8'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </span>
      <input
        className='h-12 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-12 pr-8 shadow-sm focus:outline-none focus:border-gray-300 focus:ring-gray-300 focus:ring-1 sm:text-sm'
        placeholder='Search...'
        type='text'
        name='search'
      />
    </label>
  );
};

export default SearchBar;
