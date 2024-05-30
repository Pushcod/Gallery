"use client";
import Image from 'next/image'
import Link from 'next/link'
import React,{useEffect} from 'react'
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';


const menuLinks = [
    { label: 'Gallery', url: '/paint' },
    { label: 'Author', url: '/outhor' },

];


const Header = () => {

    const { user } = useKindeBrowserClient();
    useEffect(() => {
      console.log(user)
    }, [user])

>>>>>>> 3af13ae55dc4fc98e314704aed2d4edfe26f81e1
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
<<<<<<< HEAD
                    <div className="flex items-center gap-10">
                        {/* <Image src={'/assets/img/nobody.png'} className='w-[56px] h-[56px] rounded-full' width={56} height={56} />
                        <h2 className='text-4xl text-white uppercase'>Nickname</h2> */}
                        <ul className="flex items-center gap-4">
=======
                    {/* <div className="flex items-center gap-10">
                        <Image src={'/assets/img/nobody.png'} className='w-[56px] h-[56px] rounded-full' width={56} height={56} />
                        <h2 className='text-4xl text-white uppercase'>Nickname</h2>
                    </div> */}
                    <ul className="flex items-center gap-4">
              {user ?
                <>
                  <div className='flex items-center gap-2'>
                    {user.picture &&  <Link href={'/profile'}><Image src={user.picture} alt={'Изображение профиля'} width={50} height={50} className='w-[50px] h-[50px] rounded-full object-cover'/></Link>}
                    <LogoutLink className='uppercase text-white/50 hover:text-white transition-all'>Выйти</LogoutLink>
                  </div>
                </>
                :
                <>
                  <li className="inline-flex">
                    <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
                  </li>
                  <li className="inline-flex">
                    <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
                  </li>
                </>
              }
            </ul>
                </div>
            </div>
        </header>

    )
}

export default Header