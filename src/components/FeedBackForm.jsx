import React from "react";

const FeedBackForm = () => {
  return (
    <>
      <div className="px-36 py-14">
        <h1 className="font-bold text-[30px] text-black leading-7">
          Feed Back
        </h1>
        <div className="">
          <p className="mt-5 text-[15px] text-justify w-1/2">
            Jika anda memiliki pertanyaan dan komentar, jangan ragu untuk
            menghubungi kami, kami dengan senang hati akan membantu
          </p>
          <div className="flex flex-col h-max gap-4 mt-5">
            <input
              className="h-[34px] w-1/2 p-3 bg-[#D9D9D9] font-2xl rounded-md outline-none border-transparent"
              type="text"
              placeholder="Your name (required)"
              required
            />
            <input
              className="h-[34px] w-1/2 p-3 bg-[#D9D9D9] font-2xl rounded-md outline-none border-transparent"
              type="text"
              placeholder="Your email (required)"
              required
            />
            <textarea
              className="p-2 bg-[#D9D9D9] w-1/2 h-[145px] resize-none font-2xl rounded-md outline-none border-transparent"
              name="feedback"
              id=""
              cols="30"
              rows="10"
              placeholder="Your feedback (required)"
            ></textarea>
            <button className="flex p-2 justify-center w-1/2 text-center rounded-md bg-blue-900 text-white font-bold font-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackForm;
