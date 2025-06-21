import { FOOTER_LINK_COLUMNS } from "@/config/constant";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div>
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2.5">
                Consulting Agency For Your Business
              </h3>
              <p className="text-sm">the quick fox jumps over the lazy dog</p>
            </div>
            <Button className="rounded-md px-10 py-4 text-sm h-12 font-bold bg-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {FOOTER_LINK_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors text-sm font-bold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span className="text-sm font-bold">(480) 555-0103</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-sm font-bold">
                    4517 Washington Ave.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span className="text-sm font-bold">
                    debra.holt@example.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-bold text-sm text-center md:text-left">
            Made With Love By Finland All Right Reserved
          </p>
          <div className="flex gap-5">
            <Link href="#" className="text-primary">
              <Facebook />
            </Link>
            <Link href="#" className="text-primary">
              <Instagram />
            </Link>
            <Link href="#" className="text-primary">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
