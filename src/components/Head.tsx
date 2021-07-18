import { Menu, Transition } from '@headlessui/react'
import React, { ReactElement, useEffect } from "react"

interface Properties {
  title: string
}
export default function Head({ title }: Properties): ReactElement {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <header className="flex justify-between z-50 p-2 px-3 w-full fixed top-0 backdrop-filter backdrop-blur-xl bg-white-600 bg-opacity-100">
      <h1 className="brand text-lg">App Shell</h1>
      <div className="buttons">
        <Menu as="div">
          <Menu.Button className="py-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </Menu.Button>
          <Transition className="h-screen text-right"
            enter="transition duration-300 ease-in-out transform"
            enterFrom="opacity-0 translate-x-12 -top-24"
            enterTo="opacity-100 translate-x-3 -top-24"
            leave="transition duration-200 ease-in-out transform"
            leaveFrom="opacity-100 translate-x-3 -top-24"
            leaveTo="opacity-0 translate-x-12 -top-24"
          >
            <Menu.Items as="div" className="min-w-min z-50 p-3 px-4 md:px-6 absolute right-0">
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
        </Menu>
      </div>
    </header>
  )
}
