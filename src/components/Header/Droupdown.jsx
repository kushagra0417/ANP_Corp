import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'


export default function Droupdown({name}) {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center ">
          {name}
            
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-40 -right-8 mt-5 flex flex-col gap-2 items-center rounded-b-md shadow-lg w-36 origin-top-right divide-y divide-gray-100  bg-white  ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? ' text-red-500 bg-gray-200' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-8 py-2 text-sm`}
                  >
                
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                    className={`${
                      active ? ' text-red-500 bg-gray-200' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-8 py-2 text-sm`}
                  >
                
                  Settings
                  </button>
              )}
                          </Menu.Item> 
                          <Menu.Item>
                          {({ active }) => (
                            <button
                    className={`${
                      active ? ' text-red-500 bg-gray-200' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-8 py-2 text-sm`}
                  >
                
                  More
                  </button>
                          )}
                        </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}




















