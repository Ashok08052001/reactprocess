import React from "react";

const Resume = () => {
  const resume = [
    {
      data: {
        Name: "Ashok.R",
        Role: "Full Stack Developer",
        Summary:
          "I am a Full Stack Developer skilled in building responsive, user‑friendly, and dynamic web applications. My expertise includes HTML, CSS, JavaScript, Tailwind CSS, React.js, and Node.js, enabling me to work across both frontend and backend development. I enjoy creating clean UI designs, writing efficient code, and developing scalable solutions. With a strong foundation in modern web technologies, I am continuously improving my skills and exploring new tools to build better digital experiences.",
        education: [
          { course: "BCA", college: "Bharath University", year: "2025" },
        ],
      },
      image: "src/assets/ashok.jpg",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "#0d1117",
          color: "#c9d1d9",
          padding: "40px",
          margin: "20px",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 0 20px rgba(0, 150, 255, 0.3)",
        }}
      >
        {resume.map((e, i) => (
          <div key={i}>
            <img
              src={e.image}
              alt="profile"
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "50%",
                marginTop: "10px",
                objectFit: "cover",
                border: "3px solid #58a6ff",
                boxShadow: "0 0 10px rgba(88, 166, 255, 0.6)",
              }}
            />

            <h1 style={{ color: "#58a6ff" }}>{e.data.Name}</h1>
            <h3 style={{ color: "#8b949e" }}>{e.data.Role}</h3>

            <p style={{ width: "60%", margin: "auto", lineHeight: "1.6" }}>
              {e.data.Summary}
            </p>

            <hr style={{ margin: "25px", borderColor: "#30363d" }} />
            <h2 style={{ color: "#58al6ff" }}>Skills</h2>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "12px",
                maxWidth: "500px",
                margin: "20px auto",
              }}
            >
              {e.skills.map((skill, idx) => (
                <li
                  key={idx}
                  style={{
                    background: "#161b22",
                    padding: "10px",
                    borderRadius: "8px",
                    color: "#58a6ff",
                    fontWeight: "bold",
                    textAlign: "center",
                    boxShadow: "0 0 8px rgba(88, 166, 255, 0.3)",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>

            <hr style={{ margin: "25px", borderColor: "#30363d" }} />

            <h2 style={{ color: "#58a6ff" }}>Education</h2>
            {e.data.education.map((edu, idx) => (
              <div key={idx}>
                <h3 style={{ color: "#c9d1d9" }}>{edu.course}</h3>
                <p style={{ color: "#8b949e" }}>{edu.college}</p>
                <p style={{ color: "#8b949e" }}>{edu.year}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Resume;

