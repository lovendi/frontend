import React, { useState, useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import * as Yup from "yup";
import { Header, Button } from "../../components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddStok = () => {
  const [productKodeProduk, setProductKodeProduk] = useState("");
  const [products, setProducts] = useState([]);
  const [tglMasuk, setTglMasuk] = useState("")
  const [qtyIn, setQtyIn] = useState("");
  const [units, setUnits] = useState([]);
  const [unitId, setUnitId] = useState("");
  const [suppliers, setSuppliers] = useState([]);
  const [supplierId, setSuppliersId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProducts(), getUnits(), getSuppliers();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      'http://localhost:5000/products'
    );
    setProducts(response.data.result);
  };

  const getUnits = async () => {
    const response = await axios.get(
      'http://localhost:5000/units'
    );
    setUnits(response.data.result);
  };

  const getSuppliers = async () => {
    const response = await axios.get(
      'http://localhost:5000/suppliers'
    );
    setSuppliers(response.data.result);
  };

  const saveStock = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/stocks", {
      productKodeProduk,
      tglMasuk,
      qtyIn: parseInt(qtyIn),
      supplierId: Number(supplierId),
      unitId: Number(unitId)
    });
    navigate("/stok");
  };

  console.log(productKodeProduk);

  const { currentColor } = useStateContext();

  return (
    <>
      <div className="mt-5 ml-14 mb-10">
        <Header category="Halaman" title="Tambah Stok" />
      </div>
      <div className="flex flex-wrap justify-center gap-1">
        <div className="w=[95%] mt-3 mb-10 w-11/12  rounded-2xl bg-white p-4 dark:bg-gray-700 dark:text-gray-200">
          <form onSubmit={saveStock}>
          <div className="field">
          <label
                  htmlFor="namaProduk"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Produk
                </label>
                <div className="control">
                  <select
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={productKodeProduk}
                    onChange={(e) => setProductKodeProduk(e.target.value)}
                  >
                     <option value="" disabled>
                  Pilih Produk
                </option>
                {products.map((product) => (
                  <option value={product.kodeProduk} key={product.kodeProduk}>
                    {product.kodeProduk} || {product.namaProduk} || {product.qty}
                  </option>
                ))}
                  </select>
                </div>
            </div>


            <div className="-mx-3 flex flex-wrap">
              <div className="field mb-6 w-full px-3 md:mb-0 md:w-1/2 ">
                <label
                  htmlFor="qtyIn"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Jumlah
                </label>
                <div className="control">
                  <input
                    type="number"
                    id="qtyIn"
                    name="qtyIn"
                    value={qtyIn}
                    onChange={(e) => setQtyIn(e.target.value)}
                    placeholder="Masukkan Jumlah"
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>



              <div className="field w-full px-3 md:w-1/2">
                <label
                  htmlFor="tglMasuk"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Tanggal Masuk
                </label>
                <div className="control">
                  <input
                    type="date"
                    id="tglMasuk"
                    name="tglMasuk"
                    value={tglMasuk}
                    onChange={(e) => setTglMasuk(e.target.value)}
                    placeholder="Masukkan Tanggal Masuk"
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 mt-2 flex flex-wrap">

              <div className="field w-full px-3 md:w-1/2">
                <label
                  htmlFor="supplier"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Supplier
                </label>
                <div className="control">
                  <select
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={supplierId}
                    onChange={(e) => setSuppliersId(e.target.value)}
                  >
                     <option value="" disabled>
                  Pilih Supplier
                </option>
                {suppliers.map((supplier) => (
                  <option value={supplier.id} key={supplier.id}>
                    {supplier.namaSupplier}
                  </option>
                ))}
                  </select>
                </div>
              </div>

              <div className="field w-full px-3 md:w-1/2">
                <label
                  htmlFor="unit"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Satuan
                </label>
                <div className="control">
                  <select
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    value={unitId}
                    onChange={(e) => setUnitId(e.target.value)}
                  >
                     <option value="" disabled>
                  Pilih Satuan
                </option>
                {units.map((unit) => (
                  <option value={unit.id} key={unit.id}>
                    {unit.namaSatuan}
                  </option>
                ))}
                  </select>
                </div>
              </div>
            </div>
              <div className="field flex justify-end gap-2">
              <Link to={'/stok'}>
              <Button
                color="white"
                bgColor="red"
                text="Batal"
                borderRadius="10px"
                type="submit"
              />
                </Link>
              <Button
                color="white"
                bgColor={currentColor}
                text="Tambah"
                borderRadius="10px"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddStok