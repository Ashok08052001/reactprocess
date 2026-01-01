import { useState } from "react";

function Language() {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translations = {
    hello: {
      tamil: "வணக்கம்",
      hindi: "नमस्ते",
    },
    thankyou: {
      tamil: "நன்றி",
      hindi: "धन्यवाद",
    },
    welcome: {
      tamil: "வரவேற்பு",
      hindi: "स्वागत है",
    },
  };

  const handleTranslate = (language) => {
    const word = text.toLowerCase().trim();
    if (translations[word]) {
      setTranslatedText(translations[word][language]);
    } else {
      setTranslatedText("⚠️ Translation not available");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-amber-300 via-pink-400 to-purple-500">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-96 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🌐 Language Translator
        </h2>

        <input
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-4"
          type="text"
          placeholder="Enter word (hello, thankyou, welcome)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-around mb-6">
          <button
            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => handleTranslate("tamil")}
          >
            Translate to Tamil
          </button>

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => handleTranslate("hindi")}
          >
            Translate to Hindi
          </button>
        </div>

        <h3 className="text-xl font-semibold text-gray-700">
          Result:{" "}
          <span className="text-pink-600 font-bold animate-pulse">
            {translatedText}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default Language;
