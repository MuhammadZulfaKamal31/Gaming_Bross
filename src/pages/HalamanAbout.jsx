import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HalamanAbout = () => {
    return (
        <>
            <Navbar />
            <div className="hero w-full h-[768px] bg-[url('https://wallpapercave.com/wp/wp7816746.jpg')]">
                <div className="flex w-[337px] h-[118px] bg-black justify-center align-middle">
                    <p className="flex text-3xl text-white text-center self-center">
                        ABOUT US
                    </p>
                </div>
            </div>
            <div className="content flex w-full h-[1500px] justify-center">
                <div className="w-[1178px] h-[1200px]  mt-[62px]">
                    <div className="about-us leading-7">
                        <h1 className="text-[50px] font-bold">ABOUT US</h1>
                        <p className="mt-10 text-2xl">
                            GAMINGBROS sudah berdiri sejak awal tahun 2010,
                            selama 13 tahun berkutat dalam dunia gaming guna
                            untuk memuaskan hasrat para gamers.
                        </p>
                        <p className="mt-5 text-2xl">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Obcaecati excepturi perspiciatis sint eius
                            dolores delectus error ea impedit, esse animi quae
                            similique quas natus repudiandae nesciunt laborum
                            reprehenderit amet! Obcaecati.
                        </p>
                        <p className="mt-5 text-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia, eveniet quaerat, quo voluptates
                            aperiam ratione omnis reiciendis esse veritatis
                            cumque debitis excepturi hic similique ab voluptas?
                            Adipisci, et veniam. Quam? Amet quisquam voluptates
                            at iste! Commodi dolores provident rerum
                            accusantium, est repellendus dolorum placeat sunt
                            aliquid impedit nostrum? Itaque eum dicta porro
                            maiores perspiciatis omnis corrupti harum cumque nam
                            rem.
                        </p>
                        <p className="mt-5 text-2xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eaque quasi, sunt qui error eveniet obcaecati
                            a vel! Voluptate dolores, quidem explicabo tenetur
                            vitae consequuntur at eius eum quaerat culpa
                            perferendis. Quasi cum, quisquam aut suscipit vel
                            iste repellat quod veniam, commodi est vero maiores
                            quibusdam nobis aperiam libero dignissimos itaque
                            accusantium, eligendi doloribus voluptate?
                            Recusandae aliquid soluta vitae inventore suscipit.
                        </p>
                    </div>
                    <div>
                        <p className="mt-10 text-[50px] font-bold">FEEDBACK</p>
                        <p className="text-2xl">
                            Jika anda memiliki pertanyaan dan komentar, jangan
                            ragu untuk menghubungi kami, kami dengan senang hati
                            akan membantu
                        </p>
                        <div className="flex flex-col h-max gap-4 mt-5">
                            <input
                                className="h-[53px] p-2 bg-[#D9D9D9] font-2xl rounded-md outline-none border-transparent"
                                type="text"
                                placeholder="Your name (required)"
                                required
                            />
                            <input
                                className="h-[53px] p-2 bg-[#D9D9D9] font-2xl rounded-md outline-none border-transparent"
                                type="text"
                                placeholder="Your email (required)"
                                required
                            />
                            <textarea
                                className="p-2 bg-[#D9D9D9] h-[145px] resize-none font-2xl rounded-md outline-none border-transparent"
                                name="feedback"
                                id=""
                                cols="30"
                                rows="10"
                                placeholder="Your feedback (required)"
                            ></textarea>
                            <button className="flex p-3 justify-center w-[443px] text-center rounded-md bg-[#00A3FF] text-white font-bold font-2xl">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HalamanAbout;
