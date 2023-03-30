import React from "react";
import items from "../categories.json";

const Categories = () => {
	return (
		<>
			<div className="px-36 py-16">
				<h1 className="font-bold text-[30px] text-black">
					Browse By Categories
				</h1>
				<div className="grid grid-flow-col grid-cols-6 gap-10 mt-6">
					{items.map(({ image, title }, i) => (
						<div key={`categories_item_${i}`} className="group">
							<div className="categories-item">
								<img src={image} alt={title} className="categories-image" />
							</div>
							<p className="text-black font-bold text-center mt-2">{title}</p>
						</div>
					))}
				</div>
				<div className="mt-10 py-10 px-5">
					<div className="bg-gradient-to-r from-blue-900 to-slate-900 p-14 rounded-2xl text-white">
						<div className="flex items-center justify-center gap-16">
							<h1 className="font-bold text-[25px]">
								Jangan Lupa Mengirimkan Konfirmasi Pembayaran Kepada Kami
							</h1>
							<button className="btn text-base">
								Send Payment Confirmation<span className="m-2"> ❯</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Categories;
