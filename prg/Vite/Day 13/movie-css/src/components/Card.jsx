import Black from "../assets/img/Black.jpg";
import Movies from "../assets/img/image.png";
import drogan from "../assets/img/drogan.jpg";
import "../css/Card.css";
const Card = () => {
  return (
    <>
      <div className="cards-wrapper">
        <div className="card-box">
          <img className="card-image" src={Black} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>

        <div className="card-box">
          <img className="card-image" src={Movies} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>

        <div className="card-box">
          <img className="card-image" src={drogan} alt="" />
          <button className="card-button">Ticket Booking</button>
        </div>
      </div>
    </>
  );
};

export default Card;
