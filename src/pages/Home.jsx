import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { GoPrimitiveDot } from "react-icons/go";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Stacked, Button} from "../components";
import {
  earningData
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";



const Home = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getProducts();
  }, [page]);

  const getProducts = async () => {
    const response = await axios.get(
      'http://localhost:5000/products/outofstock'
    );
    setProducts(response.data);

    console.log(response.data);
  };

  const changePage = ({ selected }) => {
    setPage(selected);
    if (selected === 9) {
      setMsg(
        "Jika tidak menemukan data yang anda cari maka cari menggunakan kata kunci spesifik"
      );
    } else {
      setMsg("");
    }
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setKeyword(query);
  };

  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-wrap gap-2 justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-gray-700 h-44 rounded-xl w-full lg:w-80 p-5 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Pendapatan Hari Ini</p>
              <p className="text-2xl">Rp. 500.000</p>
            </div>
          </div>
          <div className="mt-5">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex mt-3 mb-3 mr-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white w-full h-44 dark:text-gray-200 dark:bg-gray-700 md:w-48 ml-3 md:m-0 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1 justify-center">
        <div className="bg-white w-full dark:text-gray-200 dark:bg-gray-700 ml-3 mt-3 mb-10 p-4 rounded-2xl md:w-760 overflow:auto">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Cash Flow Update</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Laba</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Modal</span>
              </p>
            </div>
          </div>
          <div className=" flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
 



            </div>
            <div className="flex w-full">
              <Stacked currentMode={currentMode} width="720px" height="420px" />
            </div>
          </div>
        </div>




        <div className="flex gap-10 m-3 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-gray-700 p-6 mb-7 rounded-2xl md:w-96">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Stok Akan Habis</p>
          </div>
          <div className="mt-10 w-full table-layout:fixed overflow-auto shadow-md rounded-2xl">

          <Table hoverable={true} className='sm:table-fixed overflow-y-hidden'>
            <Table.Head className="bg-gray-300">
              <Table.HeadCell className="w-0">No</Table.HeadCell>
              <Table.HeadCell className="w-52">Nama Produk</Table.HeadCell>
              <Table.HeadCell className="w-20">Stok</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {products.map((product, index) => (
                <Table.Row
                  key={product.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.namaProduk}
                  </Table.Cell>
                  <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.qty}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>

          

          </div>

        </div>
      </div>




      </div>

{/* RECENT */}




      
    </div>
  );
};

export default Home;
