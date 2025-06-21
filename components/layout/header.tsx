"use client";

import { NAV_LINKS } from "@/config/constant";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  MenuIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Header = () => {
  return (
    <div className="container flex items-center gap-4 justify-between mx-auto py-4 px-6 sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <h1 className="text-2xl font-bold ">Bandage</h1>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        {NAV_LINKS.map((link) => (
          <Link
            className="text-sm text-neutral-500 font-bold hover:text-primary transition-colors duration-300"
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center">
        <Button
          variant="ghost"
          className="text-primary cursor-pointer flex items-center gap-2"
        >
          <UserIcon />
          <span className="text-sm font-bold">Login / Register</span>
        </Button>
        <Button variant="ghost" className="text-primary cursor-pointer">
          <SearchIcon />
        </Button>
        <Button variant="ghost" className="text-primary cursor-pointer">
          <ShoppingCartIcon /> 1
        </Button>
        <Button variant="ghost" className="text-primary cursor-pointer">
          <HeartIcon /> 1
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2">
        <Button variant="ghost" className="text-primary cursor-pointer">
          <SearchIcon />
        </Button>
        <Button variant="ghost" className="text-primary cursor-pointer">
          <ShoppingCartIcon /> 1
        </Button>
        <Button variant="ghost" className="text-primary cursor-pointer">
          <HeartIcon /> 1
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-primary cursor-pointer">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center justify-center h-full gap-8 -mt-16">
              {NAV_LINKS.map((link) => (
                <Link
                  className="text-3xl text-neutral-500 font-bold hover:text-primary transition-colors duration-300"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
