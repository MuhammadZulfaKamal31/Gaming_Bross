import React, { useEffect, useState } from "react";


const Footer = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        const body = document.querySelector('body');
        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <>
            <footer className="bg-blue-900 dark:bg-slate-900 text-white">
                <div className="grid-rows-2 footer px-36 py-14">

                    <div className="">
                        <span className="text-xl font-bold mb-2">GAMINGBROS</span>
                        <p className="-mt-2">ITC Mangga Dua Lt, II Blok D No.33, Jl, Mangga Dua Raya No.11</p>
                        <p className="-mt-2">RT,11/RW.5, Ancol,Kec Pademangan,Kota Jkt Utara</p>
                        <p className="-mt-2">Daerah Khusus Ibukota Jakarta 11430</p>
                    </div>
                    <div className="-mt-6">
                        <span className="text-xl font-bold mb-2">STORE HOURS</span>
                        <p className="-mt-1">Senin-Sabtu: 10:30 AM - 6.00 PM</p>
                        <p className="-mt-1 mb-5">Minggu: 10:30 AM - 5.00 PM</p>

                        <p className="mt-1">Untuk Pemesanan pada hari minggu atau hari besar akan</p>
                        <p className="-mt-1">di proses pada keesokan harinya</p>
                    </div>
                    <div className="flex gap-7 text-white font-semibold">
                        <p>About</p>
                        <p>FAQ</p>
                        <p>Contack</p>
                        <p>How To Buy</p>
                        <p>Comunity</p>
                    </div>



                    <div className="-mt-6">
                        <span className="text-xl font-bold mb-2">STAY IN TOUCH WITH US</span>
                        <p className="-mt-1">Youtube: GAMINGBROS</p>
                        <p className="-mt-2">Whatsapp: +08xxxxxxxxx</p>
                        <p className="-mt-2">Email: awkwakk@gmail.com</p>
                    </div>
                </div>

                <div className="bg-footer2 h-12 flex items-center justify-center">
                    <p className="text-[14px]">Copyright 2023 - Powered by GAMINGBROS</p>

                    {/* button buat toggle darkmode */}
                    <div className=" absolute right-[540px] ">
                        <button
                            className="p-2 dark:bg-indigo-200 bg-blue-200 text-white rounded-full w-6 h-6 flex justify-center items-center"
                            onClick={handleTheme}
                        >
                            {theme === 'light' ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;