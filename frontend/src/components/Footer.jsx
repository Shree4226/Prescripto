import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col footer-grid gap-14 my-10 mt-40 text-sm'>
            {/* --left-section --*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt=''/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sequi fugiat atque porro voluptates ut saepe alias! Placeat quibusdam voluptate, quas ipsa cum voluptates porro labore animi possimus. Minus quia, officiis possimus beatae omnis perspiciatis, dignissimos dolore repellat maxime facilis voluptate optio impedit iste consectetur labore, eius sed ipsum atque?</p>
            </div>

            {/* --center-section--*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* ---right-section--*/}
            <div>
                <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-32323</li>
                    <li>abcd@gmail.com</li>
                </ul>
            </div>
        </div>

        {/*--copyright-text--*/}
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer