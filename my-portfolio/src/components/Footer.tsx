"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className='bg-gray-950 py-8 px-6 md:px-20 text-gray-200 mt-5'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Centered Text */}
          <div className="flex justify-center items-center md:col-span-1">
            <p className="text-md font-bold text-gray-400">
              © 2024 Muhammad Moiz
            </p>
          </div>

          {/* Social Links on Right */}
          <div className="flex justify-end items-start md:col-span-2">
            <div className='text-right'>
              <div className='flex space-x-4 mb-4 justify-end'>
                <Link href="https://www.facebook.com/moizlucky11">
                  <FaFacebookF className='text-white bg-blue-800 w-8 h-8 rounded-full p-2 hover:bg-blue-700 transition-colors duration-300' />
                </Link>
                <Link href="https://www.instagram.com/moiz_lucky1/">
                  <FaInstagram className='instagram text-white w-8 h-8 rounded-full p-2 hover:bg-pink-400 transition-colors duration-300' />
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-moiz-440ab6283/">
                  <FaLinkedin className='text-white bg-blue-500 w-8 h-8 rounded-full p-2 hover:bg-blue-400 transition-colors duration-300' />
                </Link>
              </div>
              <div>
                <a href="mailto:muhammadmoiz711@gmail.com" target='_blank' className='text-yellow-400 underline flex items-center gap-2'>
                  <AiOutlineMail className='text-xl' />
                  muhammadmoiz711@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
