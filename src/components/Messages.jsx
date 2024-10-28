import { useState } from 'react';

function Messages() {
  // State to track which data to show (messages or tickets)
  const [showMessages, setShowMessages] = useState(true);

  // Mock data for messages and tickets (you can replace this with actual data)
  const messageData = [
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
    // More message data
  ];

  const ticketData = [
    {
      id: 1,
      businessName: 'Walmart',
      consultant: 'TechConsult',
      sid: '0154545999',
      opportunity: 'Deal',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      fees: '$500000',
    },
    // More ticket data
  ];

  return (
    <div className="mt-3">
      <h1 className="text-2xl border-l-4 border-red-500 pl-3 mb-6">Messages</h1>

      <div className="flex justify-start">
        {/* Button to toggle Messages */}
        <button
          className="btn mx-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
          onClick={() => setShowMessages(true)}
        >
          Messages
        </button>

        {/* Button to toggle Tickets */}
        <button
          className="btn mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setShowMessages(false)}
        >
          Tickets
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
            </tr>
          </thead>
          <tbody>
            {(showMessages ? messageData : ticketData).map((item, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Messages;
