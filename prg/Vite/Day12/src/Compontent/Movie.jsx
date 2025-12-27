const Movie = () => {
  const directorName = [
    {
      director: "Lokesh Kanagaraj",
      movies: [
        { title: "Vikram", script: "Lokesh Kanagaraj" },
        { title: "Kaithi", script: "Lokesh Kanagaraj" },
        { title: "Master", script: "Lokesh Kanagaraj" },
      ],
    },
    {
      director: "Mani Ratnam",
      movies: [
        { title: "Ponniyin Selvan 1", script: "Elango Kumaravel" },
        { title: "Ponniyin Selvan 2", script: "Elango Kumaravel" },
        { title: "OK Kanmani", script: "Mani Ratnam" },
      ],
    },
    {
      director: "Shankar",
      movies: [
        { title: "Indian", script: "Shankar" },
        { title: "Indian 2", script: "Shankar" },
        { title: "Anniyan", script: "Shankar" },
      ],
    },
  ];
  //left function and right output return

  return (
    <>
      {directorName.map((e) => (
        <div key={e.director}>
          <h1>{e.director}</h1>

          {e.movies.map((m) => (
            <p key={m.title}>- {m.title}</p>
          ))}

          <hr />
        </div>
      ))}
    </>
  );
};

export default Movie;
