import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill, BsSearch, BsNewspaper, BsCameraFill, BsFillCameraVideoFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

import { useDebounce } from 'use-debounce';
import { useStateContext } from '../contexts/StateContextProvider'

function Header({ darkTheme, setDarkTheme }) {
  const [text, setText] = useState('');
  const { setSearchTerm } = useStateContext('')
  const [debouncedValue] = useDebounce(text, 300)

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="pt-5 px-5 border-b">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full items-center">
        <div className="lg:col-span-3 col-span-12">
          <Link to="/">
            <img className="lg:m-0 mx-auto" src={logo} alt="logo" width="120px" height="60px" />
          </Link>
        </div>
        <div className="relative lg:col-span-6 col-span-12 align-center w-full">
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            value={text}
            placeholder="Pesquisar"
            className="dark:text-black w-full outline-0 py-4 px-3 rounded-full border-2 border-gray-300"
            onChange={(e) => setText(e.target.value)}
          />
          {text !== '' && (
            <div onClick={() => setText('')} className="absolute top-5 right-5 text-gray-500 text-lg cursor-pointer"><FaTimes /></div>
          )}
        </div>
        <div className="lg:col-span-3 lg:block hidden text-right  col-span-12 w-full">
          <button className={`p-3 rounded-full ${darkTheme === true ? 'bg-white text-black' : 'bg-slate-900 text-white'}`} onClick={() => setDarkTheme(!darkTheme)}>{darkTheme === true ? (
            <span className="flex items-center justify-between"><BsFillSunFill /> <span className="text-md font-medium ml-1">Light</span></span>
          ) : <span className="flex items-center justify-between"><BsFillMoonFill /> <span className="text-md font-medium ml-1">Dark</span></span>}</button>
        </div>
      </div>
      <div className="pb-2 pt-5">
        <nav className="flex items-center justify-center text-lg">
          <Link to="/search">
            <div className="flex items-center mx-3">
              <BsSearch />
              <span className="ml-1">Tudo</span>
            </div>
          </Link>
          <Link to="/news">
            <div className="flex items-center mx-3">
              <BsNewspaper />
              <span className="ml-1">Notícias</span>
            </div>
          </Link>
          <Link to="/images">
            <div className="flex items-center mx-3">
              <BsCameraFill />
              <span className="ml-1">Imagens</span>
            </div>
          </Link>
          <Link to="/videos">
            <div className="flex items-center mx-3">
              <BsFillCameraVideoFill />
              <span className="ml-1">Videos</span>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header;
