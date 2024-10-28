import { useState } from 'react';

function LoinsAdvisor() {
  const [selectedCategory, setSelectedCategory] = useState('Sellers');

  const sellersData = [
    {
      id: 1,
      businessName: 'Reliance',
      consultant: 'Edura Limited',
      sid: '0123222999',
      opportunity: 'Official',
      country: 'America',
      state: 'London',
      city: 'Washington',
      fees: '$450000',
      status: 'Active',
    },
    // Add more seller data if needed
  ];

  const buyersData = [
    {
      id: 1,
      businessName: 'Amazon',
      consultant: 'Tech Solutions',
      sid: '0987654321',
      opportunity: 'Growth',
      country: 'USA',
      state: 'New York',
      city: 'Manhattan',
      fees: '$350000',
      status: 'Pending',
    },
    // Add more buyer data if needed
  ];

  const tableData = selectedCategory === 'Sellers' ? sellersData : buyersData;

  return (
    <div>
      <div className="">
        <h1 className="text-2xl border-l-4 border-red-500 pl-3 mb-6">
          Lions Advisors
        </h1>

        <div className="flex justify-start">
          <button
            className={`btn mx-4 ${selectedCategory === 'Sellers' ? 'bg-red-700' : 'bg-red-500'} hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded`}
            onClick={() => setSelectedCategory('Sellers')}
          >
            Sellers
          </button>
          <button
            className={`btn mx-4 ${selectedCategory === 'Buyers' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
            onClick={() => setSelectedCategory('Buyers')}
          >
            Buyers
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Serial No
                </th>
                <th scope="col" className="px-6 py-3">
                  Business Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Consultant
                </th>
                <th scope="col" className="px-6 py-3">
                  SID
                </th>
                <th scope="col" className="px-6 py-3">
                  Opportunity
                </th>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Fees
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">View</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                  </th>
                  <td className="px-6 py-4">{item.businessName}</td>
                  <td className="px-6 py-4">{item.consultant}</td>
                  <td className="px-6 py-4">{item.sid}</td>
                  <td className="px-6 py-4">{item.opportunity}</td>
                  <td className="px-6 py-4">{item.country}</td>
                  <td className="px-6 py-4">{item.state}</td>
                  <td className="px-6 py-4">{item.city}</td>
                  <td className="px-6 py-4">{item.fees}</td>
                  <td className="px-6 py-4">{item.status}</td>
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

export default LoinsAdvisor;
