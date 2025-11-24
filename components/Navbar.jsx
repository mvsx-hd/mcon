"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react"
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { TbLogout } from "react-icons/tb";


export default function Home() {

    const [showNav, setShowNav] = useState(false)

    const { data: session } = useSession()
    console.log(session);

    const navItems = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Health Tips",
            url: "/health-tips"
        },
        {
            name: "About Us",
            url: "/about"
        }
    ]
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className="flex flex-col bg-gray-50">
            <nav className="flex justify-between items-center px-7 md:px-20 py-2 bg-white/30 shadow">
                <div className="flex items-center justify-center">
                    {session ? (
                        // <img src={session?.user?.image}
                        // alt={session?.user?.name.slice(0, 1).toLocaleUpperCase()}
                        // />

                        <div className=''>

                            <button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                className='border-none outline-none'
                            >
                                <Avatar
                                    alt={session?.user?.name.slice(0, 1).toLocaleUpperCase()}
                                    src={session?.user?.image}
                                />
                            </button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                }}
                            >
                                <Link href={"/profile"}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                </Link>
                                <Link href={"/share-advice"}>
                                    <MenuItem onClick={handleClose}>Share Advice</MenuItem>
                                </Link>

                                <MenuItem onClick={handleClose}>
                                    <button
                                        onClick={() => signOut()}
                                        className='flex items-center gap-1 text-red-600'
                                    >
                                        <TbLogout />
                                        <span>Logout</span>
                                    </button>
                                </MenuItem>
                            </Menu>
                        </div>

                    ) : (
                        <Link href={"/auth/signin"} className='lg:flex hidden items-center gap-1 bg-green-800 text-white p-3 rounded-full'>
                            <FiUser className='text-xl' />
                        </Link>
                    )}
                    <div className="">
                        <Image src="/logo.jpg" alt="MedCon Logo" width={100} height={100} />
                    </div>
                </div>



                <div className='lg:flex hidden items-center gap-8'>
                    {
                        navItems.map((item, index) => (
                            <Link key={index} href={item.url} className='text-lg hover:text-green-600 transition-all duration-200 font-light'>{item.name}</Link>
                        ))
                    }
                </div>

                <div className='lg:hidden text-2xl z-30'>
                    <button onClick={() => setShowNav(!showNav)}>
                        {
                            showNav ? <IoIosClose className='text-3xl' /> : <HiMenuAlt4 />
                        }
                    </button>
                </div>
                {/* mobile and tablet navbar */}
                <div className={`bg-gray-500/70 h-full w-full absolute top-0 left-0 p-5 ${showNav ? "block" : "hidden"}`}>
                    <div className='flex flex-col items-center gap-10 mb-10 mt-25'>
                        {
                            navItems.map((item, index) => (
                                <Link key={index} href={item.url}>{item.name}</Link>
                            ))
                        }
                    </div>
                    {!session && (
                        <Link href={"/auth/signin"}
                            className='flex items-center justify-center gap-1 bg-green-900 text-white 
                            px-6 py-2 rounded-full'
                        >
                            <FiUser className='text-xl' />
                            <p>Sign In</p>
                        </Link>
                    )
                    }
                </div>
                <div className={`bg-white/50 h-full w-full lg:hidden absolute top-0 left-0 p-5 ${showNav ? "block" : "hidden"}`}>
                    <div className='flex flex-col items-center gap-10 mb-10 mt-25'>
                        {
                            navItems.map((item, index) => (
                                <Link key={index} href={item.url}>{item.name}</Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </main>
    );
}
