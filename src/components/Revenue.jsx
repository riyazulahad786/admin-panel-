import  { useState, useEffect } from 'react';

function Revenue() {
  // Sample data - you can replace this with a fetch request to your API
  const [salesData, setSalesData] = useState([]);

  // Simulate fetching data
  useEffect(() => {
    const fetchData = async () => {
      // This is where you would normally fetch your data
      // For demonstration, we're using static data
      const data = [
        {
          serialNo: 1,
          businessName: 'Reliance',
          consultant: 'Edura Limited',
          sid: '0123222999',
          opportunity: 'Official',
          country: 'America',
          state: 'London',
          city: 'WashingTon',
          fees: '$450000',
        },
        {
          serialNo: 2,
          businessName: 'Infotech',
          consultant: 'Global Solutions',
          sid: '0123222998',
          opportunity: 'New Project',
          country: 'Canada',
          state: 'Ontario',
          city: 'Toronto',
          fees: '$300000',
        },
        {
          serialNo: 3,
          businessName: 'Tech Innovations',
          consultant: 'Future Tech',
          sid: '0123222997',
          opportunity: 'Research',
          country: 'UK',
          state: 'England',
          city: 'London',
          fees: '$200000',
        },
      ];

      setSalesData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-3">
        <h1 className="text-2xl border-l-4 border-red-500 pl-3 mb-6">
          Sales Income
        </h1>

        <div className="flex justify-start">
          <button className="btn mx-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded">
            Listing Sales
          </button>
        </div>
        
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Serial No</th>
                <th scope="col" className="px-6 py-3">Business Name</th>
                <th scope="col" className="px-6 py-3">Consultant</th>
                <th scope="col" className="px-6 py-3">SID</th>
                <th scope="col" className="px-6 py-3">Opportunity</th>
                <th scope="col" className="px-6 py-3">Country</th>
                <th scope="col" className="px-6 py-3">State</th>
                <th scope="col" className="px-6 py-3">City</th>
                <th scope="col" className="px-6 py-3">Fees</th>
                <th scope="col" className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((item) => (
                <tr key={item.serialNo} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.serialNo}
                  </th>
                  <td className="px-6 py-4">{item.businessName}</td>
                  <td className="px-6 py-4">{item.consultant}</td>
                  <td className="px-6 py-4">{item.sid}</td>
                  <td className="px-6 py-4">{item.opportunity}</td>
                  <td className="px-6 py-4">{item.country}</td>
                  <td className="px-6 py-4">{item.state}</td>
                  <td className="px-6 py-4">{item.city}</td>
                  <td className="px-6 py-4">{item.fees}</td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Revenue;
