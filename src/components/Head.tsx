import { Menu, Transition } from '@headlessui/react'
import React, { ReactElement, useEffect, useState } from 'react'




function SearchIcon({ stroke = "currentColor" }: {
  stroke?: string
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke={stroke} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

interface Properties {
  title: string
}
export default function Head({ title }: Properties): ReactElement {
  useEffect(() => {
    document.title = title
  }, [title])

  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="flex justify-between z-50 p-2 px-3 md:p-2 md:px-8 w-full fixed top-0 backdrop-filter backdrop-blur-lg bg-opacity-100" style={{ minHeight: 46 }}>
      {!showSearch && <h1 className="brand font-black text-lg mr-1">App Shell</h1>}
      <div className={`relative flex ${showSearch ? 'flex-grow justify-center md:justify-end' : 'justify-between'} buttons`}>
        {!showSearch && <button type="button" className="search-btn inline-flex items-center justify-center w-7 h-7 mx-3 transition-colors duration-150 bg-blue-700 rounded-full shadow-md focus:shadow-outline hover:bg-blue-800"
          onClick={() => setShowSearch(true)} aria-label="Search"><SearchIcon stroke="white" /></button>}
        <Transition
          enter="transform transition duration-300 ease"
          enterFrom="opacity-0 -translate-x-48 scale-x-0"
          enterTo="opacity-100 translate-x-0 scale-x-100"
          leave="transform transition duration-100 ease-in"
          leaveFrom="opacity-100 absolute -right-2 scale-x-150 translate-x-0"
          leaveTo="opacity-0 absolute -right-2 top-0 scale-x-0 translate-x-36"
          show={showSearch}
          className="flex w-[335px] items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setShowSearch(false)}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <div className="flex flex-grow relative mx-3">
            <input autoFocus className="text-gray-800 flex flex-grow h-7 pl-3 pr-8 border rounded-xl focus:shadow-outline" type="text" placeholder="Search..." />
            <button type="button" className="absolute inset-y-0 right-0 inline-flex items-center justify-center w-8 h-7 font-bold bg-indigo-600 rounded-r-xl hover:bg-indigo-500 focus:bg-indigo-700" aria-label="Search"><SearchIcon stroke="white" /></button>
          </div>
        </Transition>
        {!showSearch && <Menu as="div">
          <Menu.Button className="py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </Menu.Button>
          <Transition className="h-screen text-right"
            enter="transition-all duration-300 ease-in-out transform"
            enterFrom="opacity-0 translate-x-12 -top-24"
            enterTo="opacity-100 translate-x-0 -top-24"
            leave="transition-all duration-200 ease-in-out transform"
            leaveFrom="opacity-100 translate-x-0 -top-24"
            leaveTo="opacity-0 translate-x-12 -top-24"
          >
            <Menu.Items as="div" className="min-w-min z-50 p-3 px-4 md:px-6 absolute -right-1">
              <Menu.Item as="div" className="mt-2 my-4">
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="div" className="my-4">
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Account
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="div" className="my-4">
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    FAQ
                  </a>
                )}
              </Menu.Item>
              <Menu.Item as="div" className="my-4">
                {({ active }) => (
                  <a
                    className={`${active && 'bg-blue-500'}`}
                    href="/account-settings"
                  >
                    Other
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>}
      </div>
    </header>
  )
}