
const Navbar = () => {

    return (
        <>
            <div className="sticky top-0">
                <div className="flex bg-blue-900 px-28 -h-10 ">

                    <div className="flex-1 text-white">
                        <a className="btn btn-ghost normal-case font-semibold text-base">PLAY FOR FREE @ PSe Sony PlayLounge</a>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 text-white text-base font-semibold">
                            <li><a href="/about">About</a></li>
                            <li><a>FAQ</a></li>
                            <li><a>Contact</a></li>
                            <li tabindex="0">
                                <a>
                                    How To Buy
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 24 24">
                                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                    </svg>
                                </a>
                                <ul className="p-2 bg-base-100 shadow-lg text-black">
                                    <li><a>Log In</a></li>
                                    <li><a>Register</a></li>
                                </ul>
                            </li>
                            <li><a>Community</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-slate-900 py-5 px-28">
                    <div className="text-white">
                        <a className="btn btn-ghost normal-case text-2xl" href="index.html">GAMINGBROS</a>
                    </div>
                    <div className="form-control w-[800px]">
                        <input type="text" placeholder="Search products here.."
                            className="input input-bordered h-[32px] rounded-full placeholder-black font-semibold" />
                    </div>
                    <div className="flex gap-3">
                        <a href="">
                            <img src="https://icon2.cleanpng.com/20180614/qzt/kisspng-klarna-payment-business-marketing-sales-pasar-5b2315709d5cf8.7324459115290259046446.jpg"
                                className="w-10 rounded-full" />
                        </a>
                        <a href="" tabindex="0">
                            <img src="https://cdn.vectorstock.com/i/1000x1000/94/38/avatar-flat-icon-on-black-background-black-style-vector-25959438.webp"
                                className="w-10 rounded-full" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;