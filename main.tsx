/** @jsxImportSource https://esm.sh/react@18.2.0 */
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import React, { useState } from "https://esm.sh/react@18.2.0";

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
  const yesButtonSize = (noClicks * 18) + 16;

  // 🌸 PAIMON & RIMURU 🌸
  const firstImg =
    "https://tenor.com/bpGyq.gif";
  const secondImg =
    "https://giphy.com/gifs/art-anime-animation-gRSqTmhQ3ayroAQ04S";

  const handleNo = () => {
    setNoClicks(prev => prev + 1);
  };

  const handleYes = () => {
    setIsValentine(true);
    new Audio("https://assets.mixkit.co/sfx/preview/mixkit-game-level-completed-2059.mp3").play();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        background: "linear-gradient(180deg, #ffe6f0, #fff)",
        overflow: "hidden",
      }}
    >
      {!isValentine ? (
        <>
          <img
            src={firstImg}
            style={{
              width: "200px",
              animation: "bounce 1.6s infinite",
            }}
          />

          <h1 style={{ color: "#ff4d88" }}>
            Will you be my Valentine? 💘
          </h1>

          <div>
            <button
              onClick={handleYes}
              style={{
                fontSize: `${yesButtonSize}px`,
                margin: "10px",
                padding: "12px 26px",
                backgroundColor: "#ff4d88",
                color: "white",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(255,77,136,0.6)",
                transition: "0.2s ease",
              }}
            >
              Yes 💖
            </button>

            <button
              onClick={handleNo}
              style={{
                fontSize: "16px",
                margin: "10px",
                padding: "10px 22px",
                backgroundColor: "#aaa",
                color: "white",
                border: "none",
                borderRadius: "999px",
                cursor: "pointer",
              }}
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
            style={{
              width: "220px",
              animation: "pop 0.6s ease-out",
            }}
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

function client() {
  createRoot(document.getElementById("root")).render(<App />);
}
if (typeof document !== "undefined") {
  client();
}

export default async function server() {
  return new Response(
    `
    <html>
      <head>
        <title>Valentine 💘</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { margin: 0; }

          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }

          @keyframes pop {
            0% { transform: scale(0.6); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .hearts::before {
            content: "💖 💕 💘 💗 💓";
            position: absolute;
            bottom: -40px;
            font-size: 40px;
            animation: floatUp 3s ease-in-out infinite;
          }

          @keyframes floatUp {
            0% { transform: translateY(0); opacity: 0; }
            30% { opacity: 1; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
        </style>
      </head>
      <body>
        <div id="root"></div>
        <script src="https://esm.town/v/std/catch"></script>
        <script type="module" src="${import.meta.url}"></script>
      </body>
    </html>
  `,
    { headers: { "content-type": "text/html" } }
  );
        }
