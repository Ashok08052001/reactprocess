const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-gray-800 text-white rounded-2xl shadow-2xl p-10 border border-gray-700">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-cyan-400 drop-shadow-lg">
            ASHOK RAJENDRAN
          </h1>
          <p className="text-xl text-gray-300 mt-2">
            Financial Transaction Executive/Full Stack developer
          </p>
        </div>

        {/* Contact + Objective */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
              Contact
            </h2>
            <p>📞 +91 883915041</p>
            <p>📧 rjashok01@gmail.com</p>
            <p>📍 Chennai - 600130</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
              Career Objective
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Dedicated professional with 3 years of experience in medical
              billing and data management. Skilled in payment posting, EOB
              analysis, and meeting deadlines with accuracy and efficiency.
            </p>
          </div>
        </div>

        <div className="my-8 border-b border-gray-600"></div>

        {/* Education */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">Education</h2>
        <ul className="space-y-2 text-gray-300">
          <li>🎓 BCA — Bharath University (2025)</li>
          <li>🎓 JJ College of Arts & Science (2018–2021)</li>
          <li>🎓 HSC — Govt. Model Hr Sec School (2017–2018)</li>
        </ul>

        <div className="my-8 border-b border-gray-600"></div>

        {/* Experience */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Experience
        </h2>
        <div>
          <p className="font-bold text-lg">Financial Transaction Executive</p>
          <p className="text-gray-400">
            Novigo Integrated Services — Dec 2022 to Present
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-300">
            <li>
              Posting payments from check batches into the practice management
              system
            </li>
            <li>Understanding EOBs and applying adjustments accurately</li>
            <li>Balancing posted batches and generating summary reports</li>
            <li>Meeting monthly closing deadlines</li>
            <li>
              Applying insurance payments based on EOB dates and procedures
            </li>
          </ul>
        </div>

        <div className="my-8 border-b border-gray-600"></div>

        {/* Billing Software */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Billing Software
        </h2>
        <div className="flex gap-3 flex-wrap">
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            MD Suite
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Lytec
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Pcare
          </span>
        </div>
        <div className="my-8 border-b border-gray-600"></div>
        {/* Skills */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            HTML
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            CSS
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            JavaScript
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            React JS
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Tailwind CSS
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Responsive Design
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Vite
          </span>
          <span className="px-4 py-2 bg-cyan-900 text-cyan-300 rounded-lg shadow-md">
            Git / GitHub
          </span>
        </div>

        <div className="my-8 border-b border-gray-600"></div>

        {/* Languages */}
        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Languages Known
        </h2>
        <p>English — Read, Write</p>
        <p>Tamil — Read, Write, Speak</p>

        {/* Other Qualifications */}
        <div className="my-8 border-b border-gray-600"></div>

        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Other Qualifications
        </h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>
            Strong knowledge of medical billing workflows and payment posting
          </li>
          <li>
            Experienced in handling EOBs, adjustments, and insurance payment
            processing
          </li>
          <li>Ability to work with high accuracy under strict deadlines</li>
          <li>Good communication and client coordination skills</li>
          <li>Fast learner with strong problem‑solving abilities</li>
          <li>Capable of working independently and as part of a team</li>
          <li>
            Excellent team collaboration skills with experience working in
            cross‑functional environments
          </li>
        </ul>

        {/* Declaration */}
        <div className="my-8 border-b border-gray-600"></div>

        <h2 className="text-2xl font-semibold text-cyan-300 mb-3">
          Declaration
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I hereby declare that all the information provided above is true and
          correct to the best of my knowledge and belief.
        </p>
      </div>
    </div>
  );
};

export default Resume;
