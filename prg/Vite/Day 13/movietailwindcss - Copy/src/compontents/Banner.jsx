import banners from "../assets/img/banners movie.png";

const Banner = () => (
  <div className="w-full rounded-xl m-1 flex-centre ">
    <div className="flex flex-col h-full items-center  w-full bg-amber-400 ">
      <img className="w-400 h-80 p-1" src={banners} alt="" />
      <h1 className="text-center p-3">ALL MOIVES 2025 </h1>
      <button className="hover:bg-black hover:text-white text-black pl-5 pr-5 pt-2 pb-2 mb-2 cursor-pointer rounded-2xl  text-center w-50   ">
        Explore More
      </button>
    </div>
  </div>
);
export default Banner;
