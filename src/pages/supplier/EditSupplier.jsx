import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Header, Button } from '../../components';
import { useStateContext } from "../../contexts/ContextProvider";

const EditSupplier = () => {
    const [namaSupplier, setNamaSupplier] = useState("");
    const [alamat, setAlamat] = useState("");
    const [telepon, setTelepon] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getSupplierById();
      }, []);

      const updateSupplier = async (e) => {
        e.preventDefault();
        try {
          await axios.patch(`http://localhost:5000/suppliers/edit/${id}`,{
            namaSatuan,
            alamat,
            telepon
        });
        navigate("/supplier")
          
        } catch (error) {
          
        }
      }
    
      const getSupplierById = async () =>{
        const response = await axios.get(`http://localhost:5000/suppliers/${id}`);
        setNamaSupplier(response.data.namaSupplier);
        setAlamat(response.data.alamat);
        setTelepon(response.data.telepon);
      };
    
      const { currentColor } = useStateContext();
    

  return (
    <>
   <div className="mt-5 ml-14 mb-10">
        <Header category="Halaman" title="Edit Supplier" />
      </div>
       <div className="flex flex-wrap justify-center gap-1">
         <div className="w=[95%] mt-3 mb-10 w-11/12  rounded-2xl bg-white p-4 dark:bg-gray-700 dark:text-gray-200">
           <form onSubmit={updateSupplier}>
             <div className="field">
               <label
                 htmlFor="namaSupplier"
                 className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
               >
                 Nama Supplier
               </label>
               <div className="control">
                 <input
                   type="text"
                   id="namaSupplier"
                   name="namaSupplier"
                   value={namaSupplier}
                   onChange={(e) => setNamaSupplier(e.target.value)}
                   placeholder="Masukkan Nama Supplier"
                   className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 />
               </div>
             </div>

             <div className="-mx-3 mt-2 flex flex-wrap">
              <div className="field w-full px-3 md:w-1/2">
                <label
                  htmlFor="alamat"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Alamat
                </label>
                <div className="control">
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan Alamat"
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>

              <div className="field w-full px-3 md:w-1/2">
                <label
                  htmlFor="telepon"
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
                >
                  Nomor Telepon
                </label>
                <div className="control">
                  <input
                    type="number"
                    id="telepon"
                    name="telepon"
                    value={telepon}
                    onChange={(e) => setTelepon(e.target.value)}
                    placeholder="Masukkan Nomor Telepon"
                    className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
              </div>
            </div>
 
 
               <div className="field flex justify-end gap-2">
               <Link to={'/supplier'}>
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

export default EditSupplier