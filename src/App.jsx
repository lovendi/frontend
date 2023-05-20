import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar,  Sidebar, ThemeSettings } from './components';
import { Home, Products, Stok, AddStok, AddProduct, Categorys, AddCategory, EditCategory, Pos, DataPenjualan, DetailPenjualan, EditProduct, Suppliers, AddSupplier, EditSupplier, Units, EditUnit, AddUnit } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);


  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-gray-700 bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-gray-200 min-h-screen md:ml-72 w-full  '
                : 'bg-gray-200 dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-gray-200 dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Home />)} />
                <Route path="/home" element={(<Home />)} />

                {/* apps  */}
                
                <Route path="/produk" element={<Products />} />
                <Route path="/produk/tambah-produk" element={<AddProduct />} />
                <Route path='/produk/edit/:id' element={<EditProduct/>}/>
                <Route path="/kategori" element={<Categorys />} />
                <Route path="/kategori/tambah-kategori" element={<AddCategory />} />
                <Route path="/kategori/edit/:id" element={<EditCategory />} />
                <Route path="/supplier" element={<Suppliers />} />
                <Route path="/supplier/tambah-supplier" element={<AddSupplier />} />
                <Route path="/supplier/edit/:id" element={<EditSupplier />} />
                <Route path="/satuan" element={<Units/>} />
                <Route path="/satuan/tambah-satuan" element={<AddUnit/>} />
                <Route path="/satuan/edit/:id" element={<EditUnit/>} />
                <Route path="/stok" element={<Stok />} />
                <Route path="/stok/tambah-stok" element={<AddStok />} />
                <Route path="/pos" element={<Pos />} />


                {/* reports  */}
                
                <Route path="/data penjualan" element={<DataPenjualan />} />
                <Route path="/data penjualan/:id" element={<DetailPenjualan />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;