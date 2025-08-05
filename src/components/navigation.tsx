'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'News', 
      href: '/blog',
      dropdown: [
        { name: 'Latest Articles', href: '/blog?category=latest' },
        { name: 'Research Highlights', href: '/blog?category=research' },
        { name: 'Student Stories', href: '/blog?category=stories' },
        { name: 'Opinion Pieces', href: '/blog?category=opinion' },
      ]
    },
    { 
      name: 'Opportunities', 
      href: '/opportunities',
      dropdown: [
        { name: 'Scholarships', href: '/opportunities?type=scholarships' },
        { name: 'Competitions', href: '/opportunities?type=competitions' },
        { name: 'Events', href: '/opportunities?type=events' },
        { name: 'Internships', href: '/opportunities?type=internships' },
      ]
    },
    { 
      name: 'Campaigns', 
      href: '/campaigns',
      dropdown: [
        { name: 'Current Campaigns', href: '/campaigns?status=current' },
        { name: 'Past Projects', href: '/campaigns?status=past' },
        { name: 'Start a Campaign', href: '/campaigns/start' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Join Us', href: '/join' },
  ];

  return (
    <nav className="bg-brand-primary text-pure-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">The Daily Scholar</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="bg-transparent hover:bg-brand-secondary text-pure-white focus:bg-brand-secondary data-[state=open]:bg-brand-secondary">
                            {item.name}
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="grid gap-3 p-4 w-48 bg-brand-primary border border-brand-secondary">
                              {item.dropdown.map((dropdownItem) => (
                                <NavigationMenuLink key={dropdownItem.name} asChild>
                                  <Link
                                    href={dropdownItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-brand-secondary hover:text-pure-white focus:bg-brand-secondary focus:text-pure-white"
                                  >
                                    <div className="text-sm font-medium leading-none text-pure-white">
                                      {dropdownItem.name}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-pure-white hover:bg-brand-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-pure-white hover:bg-brand-secondary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-primary">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-pure-white hover:bg-brand-secondary block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="text-brand-tertiary hover:bg-brand-secondary block px-3 py-2 rounded-md text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}