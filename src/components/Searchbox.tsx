import { Transition } from '@headlessui/react'
import React, { ReactElement } from 'react'


export function SearchIcon({ stroke = "currentColor" }: {
  stroke?: string
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke={stroke} strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

export default function Searchbox({
  show,
  onCancel,
}: {
  show: boolean,
  onCancel?: (event: React.MouseEvent) => void
}): ReactElement {
  return (
    <Transition
      enter="transform transition duration-300 ease"
      enterFrom="opacity-0 translate-x-32 scale-x-0"
      enterTo="opacity-100 translate-x-0 scale-x-100"
      leave="transform transition duration-100 ease-in"
      leaveFrom="opacity-100 absolute -right-2 scale-x-150 translate-x-0"
      leaveTo="opacity-0 absolute -right-2 top-0 scale-x-0 translate-x-36"
      show={show}
      className="flex w-[335px] items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={onCancel}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <div className="flex flex-grow relative mx-4">
        <input autoFocus className="text-current flex flex-grow h-8 pl-3 pr-8 border rounded-full focus:shadow-outline" type="text" placeholder="Search..." />
        <button type="button" className="absolute inset-y-0 right-0 inline-flex items-center justify-center w-12 h-8 font-bolder" aria-label="Search"><SearchIcon /></button>
      </div>
    </Transition>
  )
}
