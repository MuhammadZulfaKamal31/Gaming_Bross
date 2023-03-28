import React from 'react'

const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>
  )
}

export default Navbar
// import { FiShoppingCart,FiUser } from "react-icons/fi";

// const Navbar = () => {

//     return (
//         <>
//             <div className="sticky top-0 z-50">
//                 <div className="flex bg-blue-900 px-28 h-[45px]">
//                     <div className="flex-1 text-white">
//                         <a className="btn btn-ghost normal-case font-semibold text-base">PLAY FOR FREE @ PSe Sony PlayLounge</a>
//                     </div>
//                     <div className="flex-none">
//                         <ul className="menu menu-horizontal px-1 text-white text-base font-semibold">
//                             <li><a href="/about">About</a></li>
//                             <li><a>FAQ</a></li>
//                             <li><a>Contact</a></li>
//                             <li tabindex="0">
//                                 <a>
//                                     How To Buy
//                                     <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
//                                         viewBox="0 0 24 24">
//                                         <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
//                                     </svg>
//                                 </a>
//                                 <ul className="p-2 bg-base-100 shadow-lg text-black">
//                                     <li><a>Log In</a></li>
//                                     <li><a>Register</a></li>
//                                 </ul>
//                             </li>
//                             <li><a>Community</a></li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="flex items-center justify-between bg-slate-900 py-5 px-28">
//                     <div className="text-white">
//                         <a className="btn btn-ghost normal-case text-2xl" href="/halamanUtama">GAMINGBROS</a>
//                     </div>
//                     <div className="form-control w-[800px]">
//                         <input type="text" placeholder="Search products here.."
//                             className="input input-bordered h-[32px] rounded-full placeholder-black font-semibold" />
//                     </div>
//                     <div className="flex gap-3 mr-5">
//                         <a href="" className="text-white text-[25px] hover:text-gray-400">
//                            <FiShoppingCart/>
//                         </a>
//                         <a href="" tabindex="0" className="text-white text-[25px] hover:text-gray-400">
//                            <FiUser/>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar;