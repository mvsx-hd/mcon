import Image from "next/image"
import Link from "next/link"
import React from "react"
import { FaFacebook}  from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"
 
// const Footer = () => {
//     return (
//         <main className="flex max-lg:flex-col max-lg:gap-10 items-center justify-between px-10 py-2 border-t border-gray-200">
//             <Link href={"#"} className='flex items-center gap-1 z-30'>
//                 <Image src={"/Medcon.png"} alt='logo' width={65} height={65} className="rounded-full" />
//                 <p className='font-semibold text-xl lg:flex hidden'>Medcon</p>
//             </Link>

//             <div className="flex max-lg:flex-col items-center gap-4 text-sm text-gray-700">
//                 <Link href={"#"}>Blog</Link>
//                 <Link href={"#"}>Chat with us</Link>
//                 <Link href={"#"}>Terms of Service</Link>
//             </div>

//             <div className="flex items-center gap-2 text-xl text-gray-800">
//                 <FaFacebook/>
//                 <FaInstagram/>
//                 <FaXTwitter/>
//                 <FaYoutube/>
//             </div>
//         </main>
//     )
// }
const Footer = () => {

    return (
      <main>
  
  
        {/* Footer */}
        <footer className="bg-white text-center py-4 border-t text-gray-600 text-sm">
          © {new Date().getFullYear()} MedCon. All rights reserved.
        </footer>
      </main>
    );
}

export default Footer
