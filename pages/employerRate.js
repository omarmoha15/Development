import Rate from '../components/rate/Rate';
import React from 'react';

const employerRate = () => {
  const RateData = [
    {
      id: '1',
      identy: '987655322',
      name: 'عمر محمد عمر',
      section: 'تقنية المعلومات ',
      job: 'مبرمج واجهات امامية',
      date: '',
      goles: '',
    },
  ];

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-3xl pb-2 bg-white">
      <div className="my-10 p-10">
        {/* Pass the entire RateData array as a prop */}
        <Rate data={RateData} />
      </div>
    </div>
  );
};

export default employerRate;
