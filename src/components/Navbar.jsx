import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="mt-3 grid grid-cols-2 place-items-center place-content-around bg-blue-700 h-16">
                <Link href='/'>
                    <h3 className='text-lg font-bold cursor-pointer'>NEXT-CRUD</h3>
                </Link>
                <Link href={'/addtopic'}>
                    <button className='bg-gray-800 px-4 py-2 text-lg font-semibold text-white cursor-pointer'>Add Topic</button>
                </Link>
            </div>
        </>
    )
}

// mongodb://localhost:27017
export default Navbar
