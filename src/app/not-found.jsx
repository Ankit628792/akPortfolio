import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function NotFound() {
    return (
        <>
            <Navbar />
            <section className='flex flex-col justify-center items-center h-dvh p-10 '>
                <img className='h-full w-full max-h-[85dvh] object-contain' src="/assets/404-cute-animal.svg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default NotFound