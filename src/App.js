import { useState } from "react";

const messages = [
  "React is really fun 😄.",
  "Invest your new income 🤑",
  "Learning React opens opportunities 🚀.",
  "Learn React ⚛️",
  "React skills enhance employability 💼.",
  "Future jobs need React 🔮.",
  "Apply for jobs 💼",
  "React library is excellent 🌟",
];

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  const [msg, setMsg] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Bakuly" });

  const handleForward = () => {
    if (msg > 1) setMsg((m) => m - 1);
  };
  const handleBackward = () => {
    if (msg < 8) setMsg((m) => m + 1);
    // setTest({ name: "Rashid" });
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <span className={msg >= 1 ? "active" : ""}>1</span>
            <span className={msg >= 2 ? "active" : ""}>2</span>
            <span className={msg >= 3 ? "active" : ""}>3</span>
            <span className={msg >= 4 ? "active" : ""}>4</span>
            <span className={msg >= 5 ? "active" : ""}>5</span>
            <span className={msg >= 6 ? "active" : ""}>6</span>
            <span className={msg >= 7 ? "active" : ""}>7</span>
            <span className={msg >= 8 ? "active" : ""}>8</span>
          </div>

          <div className="message">
            {" "}
            Steps {msg}: {messages[msg - 1]}
            {/* {test.name} */}
          </div>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#55ffee", color: "#000" }}
              onClick={handleForward}
            >
              Backward
            </button>
            <button
              style={{ backgroundColor: "#55ffee", color: "#000" }}
              onClick={handleBackward}
            >
              forward
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
