
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuLinks = [
    { label: 'Gallery', url: '/galleries' },
    { label: 'Author', url: '/outhor' },

];

const Header = () => {
    return (
        <header className='w-full py-4'>
            <div className="container mx-auto">
                <div className='flex justify-between'>
                    <menu className="flex items-center gap-10">
                        {menuLinks.map((item, index) => {
                            return (
                                <>
                                <li key={index}>
                                <Link href={item.url} className='text-4xl text-white uppercase '>{item.label}</Link>
                                </li>
                                
                                </>
                                

                            )
                        }
                        )}
                    </menu>
                    <div className="flex items-center gap-10">
                        <Image src={'/assets/img/nobody.png'} className='w-[56px] h-[56px] rounded-full' width={56} height={56} />
                        <h2 className='text-4xl text-white uppercase'>Nickname</h2>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header