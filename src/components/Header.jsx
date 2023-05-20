import React from 'react';

const Header = ({ category, title }) => (
  <>
    <p className="text-lg text-gray-500 dark:text-gray-200">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-700 dark:text-slate-500">
      {title}
    </p>
    </>

);

export default Header;