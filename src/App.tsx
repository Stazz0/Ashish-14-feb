import { useState } from "react";
import "./App.css";

const loveBearGifs = [
  "https://gifdb.com/images/high/couple-cuddle-cute-bear-love-i9antc9h74u11529.gif",
  "https://media1.tenor.com/m/M3QAPILmpr0AAAAC/bubu-dudu.gif",
  "https://media1.tenor.com/m/VGaHxucaYscAAAAC/sad.gif",
  "https://media1.tenor.com/m/I3dzAXpujPQAAAAC/cry.gif",
  "https://media1.tenor.com/m/tY6Lsw8WJ40AAAAC/hug-me-im-sad.gif",
  "https://media.tenor.com/1mTPXADa0yMAAAAi/cry-miss.gif",
  "https://media1.tenor.com/m/_lD3-ws5NjkAAAAC/peach-peachcry.gif",
  "https://media1.tenor.com/m/q6afydIcrLMAAAAC/love-cute.gif",
  "https://media1.tenor.com/m/G8V7lqvhvmcAAAAC/love-you.gif",
  // Add more gif URLs here
];

const pickupLines = [
  "Do you have a name, or can I call you mine in my romantic love story? ❤️",
  "Are you a camera? Because every time I look at you, I smile. 📷",
  "Do you have a map? I keep getting lost in your eyes. 🗺️",
  "Are you a campfire? Because you're hot and I want s'more. 🔥",
  "Do you have a Band-Aid? Because I just scraped my knee falling for you. 💔",
  "If beauty were a crime, you'd be serving a life sentence in my heart's prison. ⛓️",
  "Do you believe in love at first sight, or should I walk by again? 👀",
  "Is your name Google? Because you've got everything I'm searching for. 🔍",
  "Do you have a camera? Because every time I look at you, I smile. 📸",

  // Add more pickup lines here
];

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [pickupLineIndex, setPickupLineIndex] = useState(0);
  const [loveBearGifIndex, setLoveBearGifIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const yesButtonSize = noCount * 6 + 20;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setPickupLineIndex((pickupLineIndex + 1) % pickupLines.length);
    setLoveBearGifIndex((loveBearGifIndex + 1) % loveBearGifs.length);
    setInputValue(""); // Reset input value when clicking No
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <a
        href="https://github.com/dikshikaaa/Valentine-s-day-experiment"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      ></a>
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Cute bear kisses"
            />
            <div
              className="text-container cute-text"
              style={{ fontSize: "1.8rem", margin: "25px 0" }}
            >
              "Roses are red, violets are blue, your presence is the best gift,
              and my heart says, 'I accept you!'"
            </div>
            <input
              type="text"
              style={{
                fontSize: "1.3rem",
                padding: "20px",
                margin: "15px 0",
                width: "80%",
              }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="DM me What should we plan ♥ ?"
            />
          </>
        ) : (
          <>
            <img
              className="h-[200px] rounded-lg"
              src={loveBearGifs[loveBearGifIndex]}
              alt="Adorable bear holding roses"
            />
            <h1 className="text-container cute-text">
              Will you be my Valentine?
            </h1>
            <div className="pickup-line-box">
              <div
                className="pickup-line-display"
                style={{
                  fontSize: "1.8rem",
                  margin: "10px 0",
                  padding: "10px",
                  border: "2px solid #ff3366",
                  borderRadius: "10px",
                  background: "#ffecf2",
                }}
              >
                {pickupLines[pickupLineIndex]}
              </div>
            </div>
            <div>
              <button
                className="yes-button cute-button yes-color"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button
                onClick={handleNoClick}
                className="no-button cute-button no-color"
              >
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
