'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBasket } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import { ModeToggle } from './ModeToggle';
import MobileNav from './MobileNav';

const links = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Products',
    href: '#',
    subLinks: [
      { name: 'Men', href: '/Men' },
      { name: 'Women', href: '/Women' },
      { name: 'Teens', href: '/Teens' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contacts',
    href: '/contact',
  },
];

export default function NavbarEXP() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false); // State to track if the menu is being hovered
  const pathname = usePathname();
  const { cartCount, handleCartClick } = useShoppingCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      !isMenuHovered // Close the dropdown only if the menu is not being hovered
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <header className='mb-8 border-b shadow-none'>
      <div className='flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl'>
        <Link href='/'>
          <h1 className='text-2xl md:text-4xl font-bold'>
            Carnival
            <span className='text-primary'>Bambini</span>
          </h1>
        </Link>

        <nav className='hidden gap-12 lg:flex 2xl:ml-16'>
          {links.map((link) => (
            <div key={link.name}>
              {link.subLinks ? (
                <div
                  className='relative group'
                  onMouseEnter={() => setIsMenuHovered(true)}
                  onMouseLeave={() => setIsMenuHovered(false)}
                >
                  <span
                    className='text-lg font-semibold text-gray-600 dark:text-gray-500 transition duration-100 hover:text-primary dark:hover:text-primary cursor-pointer'
                    onClick={toggleDropdown}
                  >
                    {link.name}
                  </span>
                  {isDropdownOpen && (
                    <div
                      ref={dropdownRef}
                      className={`absolute left-0 mt-1 py-2 w-32 dark:bg-blue-950 border rounded-lg shadow-lg z-10 transition-opacity ${
                        isMenuHovered ? 'opacity-100' : 'opacity-0' // Use opacity transition based on menu hover
                      }`}
                    >
                      {link.subLinks.map((subLink) => (
                        <Link
                          href={subLink.href}
                          key={subLink.name}
                          className='block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 dark:hover:bg-blue-900 hover:bg-blue-50'
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  passHref
                  className={`text-lg font-semibold ${
                    pathname === link.href
                      ? 'text-primary dark:text-gray-300'
                      : 'text-gray-600 dark:text-gray-500'
                  } transition duration-100 hover:text-primary dark:hover:text-primary`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className='flex items-center'>
          <Button
            variant='outline'
            className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 border-none hover:text-teal-400 hover:bg-transparent'
            // className='flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none border-none'
            onClick={() => handleCartClick()}
          >
            <div className='relative'>
              <ShoppingBasket />
              {/* <span className='text-primary absolute top-0 -right-2'>0</span> */}
              <div className='bg-red-500 w-[16px] h-[16px] absolute -right-3 top-0 rounded-full text-white flex items-center justify-center text-sm font-normal'>
                {cartCount}
              </div>
            </div>
            <span className='hidden text-xs font-semibold text-gray-500 sm:block'>
              Cart
            </span>
          </Button>

          <div>
            <MobileNav />
          </div>

          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
