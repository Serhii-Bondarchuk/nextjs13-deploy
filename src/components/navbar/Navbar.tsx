'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Navbar.css';
import { navRoutes } from './utils/navRoutes';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();
  const navClass = classNames('main_nav', {
    nav_scroll: isScrolled,
  });

  useEffect(() => {
    function checkScrolling() {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', checkScrolling);
    return () => {
      return window.removeEventListener('scroll', checkScrolling);
    };
  }, [navClass]);

  return (
    <nav className={navClass}>
      {navRoutes().map((route) => {
        const { name, path } = route;
        const isActive = pathName === path;
        const activeClass = classNames({
          ['isActive']: isActive,
        });

        return (
          <li key={path} className={`${activeClass}`}>
            <Link href={path} className="hover_underline">
              {name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
}

export default Navbar;
