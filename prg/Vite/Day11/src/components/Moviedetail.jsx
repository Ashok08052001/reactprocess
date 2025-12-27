const Moviedetail = () => {
  return (
    <>
      <div
        style={{
          background: "radial-gradient(circle at center, #1a1a1a, #000000)",
          color: "white",
          textAlign: "center",
          padding: "20px",
          boxShadow: "0 0 40px #ff0055 inset",
        }}
      >
        <img src=".\src\assets\img\Dragon.jpg" alt="poster" />
        <h1>Movie name is : Dragon</h1>
        <DirectorName />
        <MovieStory />
        <ActorName />
        <Heroines />
        <ReleaseDetails />
      </div>
    </>
  );
};
export default Moviedetail;

export const DirectorName = () => {
  return (
    <>
      <h2> Director: Lokesh Kanagaraj </h2>
    </>
  );
};

export const MovieStory = () => {
  return (
    <>
      <p>
        After a painful breakup, Ragavan drops out of college and spirals into
        the world of financial fraud, chasing money, power, and validation
      </p>
    </>
  );
};
export const ActorName = () => {
  return (
    <>
      <h1>
        Actor Name: - Pradeep Ranganathan — plays Ragavan “Dragon” Dhanapal
      </h1>
      <p>
        {" "}
        Pradeep Ranganathan is an actor, director, and screenwriter known for
        his energetic storytelling style.
      </p>
    </>
  );
};
export const Heroines = () => {
  return (
    <>
      <h1>Anupama Full Name: Anupama Parameswaran</h1>

      <p>Born: She was born in a small town and grew up with big dreams.</p>
    </>
  );
};
export const ReleaseDetails = () => {
  return (
    <>
      <h1>Dragon Release</h1>
      Release Date: - 21 February 2025 Languages Released: Tamil Runtime: 155
      minutes Genre: Love/Emotional Drama
    </>
  );
};
