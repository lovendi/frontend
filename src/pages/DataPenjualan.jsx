import React, { useMemo, useState } from "react";
import Data_Penjualan from "../data/Data_Penjualan";
import {Header} from "../components";
import {Link} from 'react-router-dom'
import { Table } from "flowbite-react";
import ReactPaginate from "react-paginate";
import DatePicker from "react-datepicker";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-datepicker/dist/react-datepicker.css";

const DataPenjualan = () => {
  const invoices = useMemo(() => Data_Penjualan, []);

  const [dateRange, setDateRange] = useState([null, null]);
const [startDate, endDate] = dateRange;

  return (
    <>
<div className="mt-14 ml-14 mb-10  sm:mt-5">
<Header category="Halaman" title="Data Penjualan" />
</div>
<div className="mr-14 flex flex-wrap justify-end gap-1">
        <div className="w-60">
          <DatePicker
            className="w-full z-0 h-12 w-96 rounded-lg border-none bg-white focus:shadow focus:outline-none dark:bg-gray-700 dark:text-white"
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            isClearable={true}
            placeholderText="Masukkan Tanggal"
          />
        </div>
        <button
          type="submit"
          className="ml-2 inline-flex items-center rounded-lg  bg-blue-500 py-2.5 px-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </div>


  {/* TABLE */}
  <div className="mt-10 mb-10 ml-14 mr-10">
    <div className="table-layout:auto overflow-y-hidden rounded-2xl shadow-md">
      <Table hoverable={true} className="sm:table-fixed overflow-y-hidden">
        <Table.Head className="bg-gray-300">
          <Table.HeadCell className="w-0">No</Table.HeadCell>
          <Table.HeadCell className="w-10">Invoice</Table.HeadCell>
          <Table.HeadCell className="w-10">Kasir</Table.HeadCell>
          <Table.HeadCell className="w-10">Total</Table.HeadCell>
          <Table.HeadCell className="w-96 ">Tanggal Transaksi</Table.HeadCell>
          <Table.HeadCell className="w-20">Aksi</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {invoices.map((invoice, index) => (
            <Table.Row
              key={invoices.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
              {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {invoice.id_transaksi}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {invoice.kasir}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {invoice.total}
              </Table.Cell>
              <Table.Cell className="break-words font-medium text-gray-900 dark:text-white">
                {invoice.tgl_transaksi}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <Link to={`/barang/edit/`}>
                  <button className="font-medium text-blue-600 dark:text-blue-500">
                    Detail
                  </button>
                </Link>
                <button
                  onClick={() => ('')}
                  className="ml-2 font-medium text-red-600 dark:text-red-500"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    <div className="mt-2">
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Total Rows:  {""}
          <span className="font-semibold text-gray-900 dark:text-white">
            Page: 
          </span>
          {""} of {""}
          <span className="font-semibold text-gray-900 dark:text-white">
            Total Page: 
          </span>
        </span>
      </div>
      <p className="has-text-centered has-danger-text"></p>
    </div>
    <nav
      className="mt-2 flex items-center justify-center text-center"
      key={''}
      role="navigation"
      aria-label="Page navigation example"
    >
      <ReactPaginate
        previousLabel={
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        nextLabel={
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        pageCount={Math.min(10)}
        onPageChange={''}
        containerClassName={"inline-flex items-center -space-x-px"}
        pageLinkClassName={"px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}
        previousLinkClassName={
          "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        nextLinkClassName={
          "block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        }
        activeLinkClassName={ 
          "z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        }
      />
    </nav>
  </div>
</>
  )
}

export default DataPenjualan