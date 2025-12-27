import Black from "../assets/img/Black.jpg";
import Movies from "../assets/img/image.png";
import drogan from "../assets/img/drogan.jpg";

const Card = () => {
  return (
    <>
      <div className=" bg-amber-200 flex  p-10 m-2  justify-around">
        <div className="bg-gray-500 p-5 flex flex-col">
          <img className="w-50  h-70 " src={Black} alt="" />
          <button className="hover:bg-white p-2 cursor-pointer m-2 rounded-2xl justify-center ">
            Ticket Booking
          </button>
        </div>
        <div className="bg-gray-400 p-5 flex flex-col">
          <img className="w-50 h-70 " src={Movies} alt="" />
          <button className="hover:bg-white p-2 cursor-pointer m-2 rounded-2xl justify-center ">
            Ticket Booking
          </button>
        </div>
        <div className="bg-gray-400 p-5 flex flex-col">
          <img className="w-50 h-70 " src={drogan} alt="" />
          <button className="hover:bg-white p-2 cursor-pointer m-2 rounded-2xl justify-center ">
            Ticket Booking
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
