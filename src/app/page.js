export default function Home() {
  return (
    <div>
      <div
        className="bg-scroll object-contain bg-no-repeat bg-contain  md:bg-cover md:-mt-20"
        style={{
          backgroundImage: `url('/images/background.png')`,
          height: "972px",
        }}
      >
        <div className="md:pt-72 md:pl-40 pt-[18%] pl-12">
          <div className=" text-black text-2xl md:text-5xl font-bold  capitalize md:leading-[70px]">
            Your Vision <br />
            Our Passion
          </div>
          <div className=" text-sky-950 md:text-lg font-normal text-xs  capitalize md:file:leading-[29px]">
            Suspendisse potenti. In eget augue egestas, gravida <br /> libero
            eu, luctus ipsum. Aliquam non pulvinar ex.
          </div>
          {/* <div
            style={{
              boxShadow: "4px 20px 40px 0px rgba(0, 0, 0, 0.06)",
            }}
            className="max-w-md h-[60px] relative"
          >
            <div className="max-w-md h-[60px] left-0 top-0 absolute bg-white bg-opacity-10 rounded-[100px] border border-gray-200" />
            <div className="w-[130px] h-[52px] px-[23px] py-4 left-[366px] top-[4px] absolute bg-gradient-to-b from-amber-400 to-orange-500 rounded-[100px] flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="relative">
                <button className="left-[30px] text-center z-10  absolute text-white text-base font-medium ">
                  Search
                </button>
                <div className="w-5 h-5 left-0 top-0 absolute justify-center items-center inline-flex" />
              </div>
            </div>
            <input
              placeholder="Search..."
              className="w-full pl-5 h-full  absolute text-zinc-600 text-opacity-80 text-base font-normal bg-transparent focus:outline-none capitalize leading-[30px]"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
