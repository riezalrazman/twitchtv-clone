import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import Logo from '../public/assets/logo.png';
import { Menu, Transition } from '@headlessui/react';
import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useSession, signIn, signOut } from 'next-auth/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const { data: session } = useSession();

  // console.log(session);

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
      {/* Left Side */}
      <div className='flex grow items-center justify-start'>
        <Link href='/'>
          <div className='flex'>
            <Image
              src={Logo}
              alt='/'
              width='36'
              height='36'
              className='cursor-pointer z-10'
            />
          </div>
        </Link>
        <p className='p-4 font-bold hover:text-[#9147ff]'>Browse</p>
        <div className='p-4'>
          <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#242428] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <h1 className='block px-4 py-2 text-sm font-bold text-[#71797e]'>GENERAL</h1>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        About
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Advertisers
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Blog
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Developers
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Download Apps
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Gift Cards
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        IGDB
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Jobs
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Loot Cave - Merch Store 
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Music on Twitch
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Partners 
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Press 
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Turbo
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <h1 className='block px-4 py-2 text-sm font-bold border-t border-gray-700 text-[#71797e]'>HELP & LEGAL</h1>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle */}
      <div className='hidden md:flex grow-[2] items-center justify-center'>
        <div className='rounded-tl-md rounded-bl-md w-[80%] h-9 bg-zinc-700 hover:ring-1 hover:ring-gray-500 duration-200 ease-linear transition-colors flex justify-between items-center max-w-[400px] m-auto p-2 rounded-xl'>
          <div className='bg-zinc-700 hover:bg-zinc-700 rounded-tr-md rounded-br-md hover:bg-opacity-40'>
            <input
              type='text'
              className='bg-transparent font-medium outline-none
              focus:bg-zinc-700 text-white  '
              placeholder='Search'
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='hidden md:flex grow items-center justify-end'>
        {session ? (
          <div className='flex items-center'>
            <Link href='/account'>
              <div>
                <p className='pr-4 cursor-pointer'>
                  Welcome, {session.user.name}
                </p>
              </div>
            </Link>
            <Menu as='div' className='relative text-left'>
              <div className='flex'>
                <Menu.Button>
                  <Image
                    src={session.user.image}
                    width='45'
                    height='45'
                    className='rounded-full'
                    alt='/'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          <Link href='/account'>Account</Link>
                        </p>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={() => signOut()}
                          className={classNames(
                            active
                              ? 'bg-gray-500 text-gray-100'
                              : 'text-gray-200',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className='flex items-center'>
            <Link href='/account'>
              <button className='px-4 py-[4px] rounded-md font-bold text-[14px] text-slate-100 bg-slate-700 hover:bg-gray-600 mr-2'>
                Log In
              </button>
            </Link>
            <Link href='/#'>
              <button className='px-4 py-[4px] rounded-md font-bold text-[14px] text-slate-100 bg-[#9147ff] hover:bg-[#6e17f1] mr-2'>
                Sign Up
              </button>
            </Link>
            <BsPerson size={25} className='hover:bg-slate-700 hover:rounded-lg cursor-pointer' />
          </div>
        )}
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className='text-center'>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#live'>Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#categories'>Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#games'>New Games</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;