import { Menu, Transition } from '@headlessui/react'
import { isMobile } from 'lib/uaparser'
import React, { ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Searchbox, { SearchIcon } from './Searchbox'


interface Properties {
  title: string
}
export default function Head({ title }: Properties): ReactElement {
  useEffect(() => {
    document.title = title
  }, [title])

  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="flex justify-between z-50 py-2 md:p-2 w-full fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-100" style={{ minHeight: 46 }}>
      {/* Brand */}
      {(!showSearch || !isMobile()) && <Link to="/">
        <h1 className="brand font-black text-lg ml-3 md:ml-8 mr-1">App Shell</h1>
      </Link>}
      {/* Buttons */}
      <div className={`relative flex ${showSearch ? 'flex-grow justify-center md:justify-end' : 'justify-between'} buttons`}>
        {/* Search */}
        {!showSearch && <button type="button" className="search-btn inline-flex items-center justify-center w-7 h-7 mx-2 transition-colors duration-150 bg-blue-700 rounded-full shadow-md focus:shadow-outline hover:bg-blue-800"
          onClick={() => setShowSearch(true)} aria-label="Search"><SearchIcon stroke="white" /></button>}
        <Searchbox show={showSearch} onCancel={() => setShowSearch(false)} />
        {/* Menu */}
        {!showSearch && <Menu as="div">
          <Menu.Button className="py-1 px-2 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </Menu.Button>
          <Transition className="h-screen text-right"
            enter="transition-all duration-200 ease` transform"
            enterFrom="opacity-0 translate-x-12 -top-24"
            enterTo="opacity-100 translate-x-0 -top-24"
            leave="transition-all duration-200 ease` transform"
            leaveFrom="opacity-100 translate-x-0 -top-24"
            leaveTo="opacity-0 translate-x-12 -top-24"
          >
            <Menu.Items as="div" className="account-menu min-w-min z-50 p-3 px-4 md:px-6 absolute -right-1">
              <Menu.Item as="div" className="mt-2 py-2">
                <a href="/account-settings">
                  Account
                </a>
              </Menu.Item>
              <Menu.Item as="div" className="py-2">
                <a href="/account-settings">
                  Settings
                </a>
              </Menu.Item>
              <Menu.Item as="div" className="py-2">
                <a href="/account-settings">
                  Help
                </a>
              </Menu.Item>
              <Menu.Item as="div" className="py-2">
                <a href="/account-settings">
                  Sign out
                </a>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>}
      </div>
    </header>
  )
}