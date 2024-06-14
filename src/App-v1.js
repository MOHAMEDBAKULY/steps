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
      <StepMessage step={3}>
        <p>How to make reusable components in react</p>
        <p>😅</p>
      </StepMessage>
      <StepMessage step={2}>
        <p> The children trick in React is useful</p>
        <p>😎</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Bakuly" });

  const handlePrevious = () => {
    if (step > 1) setStep((m) => m - 1);
  };
  const handleForward = () => {
    if (step < 8) setStep((m) => m + 1);
  };

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <span className={step >= 1 ? "active" : ""}>1</span>
            <span className={step >= 2 ? "active" : ""}>2</span>
            <span className={step >= 3 ? "active" : ""}>3</span>
            <span className={step >= 4 ? "active" : ""}>4</span>
            <span className={step >= 5 ? "active" : ""}>5</span>
            <span className={step >= 6 ? "active" : ""}>6</span>
            <span className={step >= 7 ? "active" : ""}>7</span>
            <span className={step >= 8 ? "active" : ""}>8</span>
          </div>

          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#000"
                bgColor="#84ff22"
                onClick={() =>
                  alert(
                    `Do not disturb this is a Child prop ${messages[step - 1]}`
                  )
                }
              >
                React Children Props
              </Button>
            </div>
          </StepMessage>

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

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h4>step {step}</h4>
      {children}
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
