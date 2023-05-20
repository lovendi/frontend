import React from 'react';
import InvoiceField from './InvoiceField';

const InvoiceItem = ({ id, name, qty, price, onDeleteItem, onEdtiItem }) => {
  const deleteItemHandler = () => {
    onDeleteItem(id);
  };

  return (
    
    <tr>
      <td className="w-full p-1 dark:text-black">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className:"py-3 px-4 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
            placeholder: 'Masukkan Kode Barang / Nama Barang',
            type: 'text',
            name: 'name',
            id: id,
            value: name,
          }}
        />
      </td>
      <td className="min-w-[70px] md:min-w-[70px] dark:text-black  ">
        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className:"py-3 px-4 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
            type: 'number',
            min: '1',
            name: 'qty',
            id: id,
            value: qty,
          }}
        />
      </td>
      <td className="relative min-w-[110px] md:min-w-[120px] p-1 md:p-1 dark:text-black">

        <InvoiceField
          onEditItem={(event) => onEdtiItem(event)}
          cellData={{
            className:"text-right py-3 px-4 appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
            type: 'number',
            min: '100',
            step: '100',
            name: 'price',
            id: id,
            value: price,
          }}
        />
      </td>
      <td className="flex items-center justify-center">
        <button
          className="mt-1 ml-1 rounded-md bg-red-500 p-2 text-white shadow-sm transition-colors duration-200 hover:bg-red-600"
          onClick={deleteItemHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default InvoiceItem;
