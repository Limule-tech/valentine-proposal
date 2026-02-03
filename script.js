import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = 16 + noClicks * 18;

  const firstImg = "https://tenor.com/bpGyq.gif"; // Paimon
  const secondImg =
    "https://media.tenor.com/3fM2zv6x5uEAAAAj/rimuru-chibi-happy.gif"; // Rimuru

  const handleYes = () => {
    setIsValentine(true);
    new Audio(
      "https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3"
    ).play();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        position: "relative",
      }}
    >
      {!isValentine ? (
        <>
          <img
            src={firstImg}
            style={{ width: "200px", animation: "bounce 1.6s infinite" }}
          />
          <h1 style={{ color: "#ff4d88" }}>Will you be my Valentine? 💘</h1>
          <div>
            <button
              onClick={handleYes}
              style={{
                fontSize: yesButtonSize,
                padding: "12px 26px",
                backgroundColor: "#ff4d88",
                color: "#fff",
                boxShadow: "0 0 10px rgba(255,77,136,0.6)",
                transition: "0.2s ease",
              }}
            >
              Yes 💖
            </button>
            <button
              onClick={() => setNoClicks(noClicks + 1)}
              style={{ padding: "10px 22px", backgroundColor: "#aaa", color: "#fff" }}
            >
              {noClicks === 0
                ? "No"
                : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="hearts"></div>
          <img
            src={secondImg}
            style={{ width: "220px", animation: "pop 0.6s ease-out" }}
          />
          <div
            style={{
              fontSize: "52px",
              color: "#ff4d88",
              fontWeight: "bold",
              marginTop: "20px",
              textShadow: "0 0 15px rgba(255,77,136,0.7)",
            }}
          >
            Yay!!! 💖🎉
          </div>
        </>
      )}
    </div>
  );
}

if (typeof window !== "undefined") {
  createRoot(document.getElementById("root")).render(<App />);
}
