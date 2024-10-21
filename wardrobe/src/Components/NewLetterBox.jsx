import React, { useState } from 'react';

const NewLetterBox = () => {
  const [email, setEmail] = useState(''); 

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setEmail(''); // Form göndərildikdən sonra inputu təmizləyir
  };

  return (
    <div className='text-center mt-20'>
      <p className='text-2xl font-medium text-gray-800'>
        Indi abune ol & <span className='font-bold'>20%</span> endirim qazan
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
          type="email"
          placeholder='Emailınızı daxil edin'
          required
          value={email}       // Inputun dəyəri state-ə bağlıdır
          onChange={(e) => setEmail(e.target.value)} // Inputun dəyəri dəyişdikcə state yenilənir
        />
        <button type='submit' className='bg-black text-white text-[14px] px-10 py-4'>
          ABUNƏ OL
        </button>
      </form>
    </div>
  );
};

export default NewLetterBox;
