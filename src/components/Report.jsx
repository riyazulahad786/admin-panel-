import {} from 'react';


const reportData = [
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
  },
  {
    id: 2,
    businessName: 'Tech Solutions',
    consultant: 'Innovate Ltd.',
    sid: '0123223000',
    opportunity: 'Potential',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    fees: '$300000',
  },
  {
    id: 3,
    businessName: 'Green Energy',
    consultant: 'Sustainable Inc.',
    sid: '0123223001',
    opportunity: 'Official',
    country: 'Australia',
    state: 'Queensland',
    city: 'Brisbane',
    fees: '$600000',
  },
 
];

function Report() {
  return (
    <div>
      <div className="mt-3">
        <h1 className="text-2xl border-l-4 border-red-500 pl-3 mb-6">
          Sales Progress Report
        </h1>

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
              {reportData.map((item, index) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index + 1}
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

export default Report;
