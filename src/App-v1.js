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
    </div>
  );
}

function Steps() {
  const [msg, setMsg] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Bakuly" });

  const handlePrevious = () => {
    if (msg > 1) setMsg((m) => m - 1);
  };
  const handleForward = () => {
    if (msg < 8) setMsg((m) => m + 1);
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
            Steps {msg}: {messages[msg - 1]}
          </div>

          <div className="buttons">
            <Button textColor="#000" bgColor="#55ffee" onClick={handlePrevious}>
              <span>◀</span>Previous
            </Button>
            <Button textColor="#000" bgColor="#55ffee" onClick={handleForward}>
              Forward<span>▶</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
