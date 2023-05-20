import React, { useState} from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header, Button } from "../../components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


const AddUnit = () => {
  const [namaSatuan, setNamaSatuan] = useState("");
  const navigate = useNavigate();

  const saveUnit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/units", {
      namaSatuan
    });
    navigate("/satuan");
  };

  const { currentColor } = useStateContext();

  return (
    <>
    <div className="mt-5 ml-14 mb-10">
         <Header category="Halaman" title="Tambah Satuan" />
       </div>
       <div className="flex flex-wrap justify-center gap-1">
         <div className="w=[95%] mt-3 mb-10 w-11/12  rounded-2xl bg-white p-4 dark:bg-gray-700 dark:text-gray-200">
           <form onSubmit={saveUnit}>
             <div className="field">
               <label
                 htmlFor="namaSatuan"
                 className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700 dark:text-white"
               >
                 Nama Satuan
               </label>
               <div className="control">
                 <input
                   type="text"
                   id="namaSatuan"
                   name="namaSatuan"
                   value={namaSatuan}
                   onChange={(e) => setNamaSatuan(e.target.value)}
                   placeholder="Masukkan Nama Satuan"
                   className="mb-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 />
               </div>
             </div>
 
 
               <div className="field flex justify-end gap-2">
               <Link to={'/satuan'}>
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

export default AddUnit