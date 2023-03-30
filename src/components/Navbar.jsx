import { useState } from "react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import Logo2 from "../assets/images/logo2.png";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<div className="sticky top-0 z-50">
				<div className="flex justify-between bg-blue-900 px-0 md:px-5 lg:px-36 h-[30px] lg:h-[45px]">
					<div className="text-white grid place-content-center w-full md:block my-1 lg:my-3">
						<a className="font-semibold text-[10px] md:text-[12px] lg:text-[13px]">
							PLAY FOR FREE @ PSe Sony PlayLounge
						</a>
					</div>
					<div
						id="navMenu"
						className={`${
							showMenu ? "block animate-fadeIn" : "hidden"
						} md:block -mt-1 lg:-mt-0 absolute bg-slate-900 md:shadow-none w-full md:w-auto lg:block md:static md:rounded-none h-200 top-28 @screen md:bg-transparent`}
					>
						<ul className="menu menu-vertical md:menu-horizontal px-3 md:px-1 -my-1 lg:-my-0 text-white text-[12px] md:text-[13px] lg:text-[13px] font-semibold">
							<li className="my-1">
								<a href="/about">About</a>
							</li>
							<li className="my-1">
								<a>FAQ</a>
							</li>
							<li className="my-1">
								<a>Contact</a>
							</li>
							<li tabIndex="0">
								<a>
									How To Buy
									<svg
										className="fill-current hidden md:block"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</a>
								<ul className="p-2 bg-base-100 shadow-md text-black">
									<li className="my-1">
										<a>Log In</a>
									</li>
									<li className="my-1">
										<a>Register</a>
									</li>
								</ul>
							</li>
							<li className="my-1">
								<a>Community</a>
							</li>
						</ul>
					</div>
				</div>

				{/* bottom navbar  */}

				<div className="flex items-center justify-between bg-slate-900 py-5 px-5 lg:px-36">
					<div className="text-white text-[23px] md:hidden">
						<button
							id="hamburger"
							className="btn btn-square btn-xl bg-transparent"
							onClick={toggleMenu}
						>
							<FiMenu />
						</button>
					</div>
					<div className="text-white">
						<a href="/pertama">
							<div className="flex gap-2">
								<img src={Logo2} alt="" width={45} height={45} />
								<div className="font-semibold">
									<h1 className="text-[20px]">GamingBrozz</h1>
									<h1 className="text-[15px] text-end ml-10 -mt-2">
										Game Station
									</h1>
								</div>
							</div>
						</a>
					</div>
					<div className="hidden md:block">
						<div className="form-control md:w-[400px] xl:w-[600px]">
							<input
								type="text"
								placeholder="Search products here.."
								className="input input-bordered h-[32px] rounded-full placeholder-black font-semibold"
							/>
						</div>
					</div>
					<div className="flex gap-3 xl:gap-5 lg:mx-5">
						<div className="text-white text-[23px] hover:text-gray-400">
							<FiShoppingCart />
						</div>
						<div className="text-white text-[23px] hover:text-gray-400 hidden md:block">
							<FiUser />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
