import { useEffect, useState } from "react";
import "./App.css";

const keys = [
  // FUNCTION ROW
  [
    { label: "Esc", code: "Escape", size: "sm" },
    { label: "F1", code: "F1" },
    { label: "F2", code: "F2" },
    { label: "F3", code: "F3" },
    { label: "F4", code: "F4" },
    { label: "F5", code: "F5" },
    { label: "F6", code: "F6" },
    { label: "F7", code: "F7" },
    { label: "F8", code: "F8" },
    { label: "F9", code: "F9" },
    { label: "F10", code: "F10" },
    { label: "F11", code: "F11" },
    { label: "F12", code: "F12" },
    { label: "Power", code: "Power", size: 'xxl' },
  ],

  // NUMBER ROW
  [
    { label: "`", code: "Backquote" },
    { label: "1 !", code: "Digit1" },
    { label: "2 @", code: "Digit2" },
    { label: "3 #", code: "Digit3" },
    { label: "4 $", code: "Digit4" },
    { label: "5 %", code: "Digit5" },
    { label: "6 ^", code: "Digit6" },
    { label: "7 &", code: "Digit7" },
    { label: "8 *", code: "Digit8" },
    { label: "9 (", code: "Digit9" },
    { label: "0 )", code: "Digit0" },
    { label: "- _", code: "Minus" },
    { label: "= +", code: "Equal" },
    { label: "Backspace", code: "Backspace", size: "xxl" },
    { label: "Delete", code: "Delete", size: "xl" },
  ],

  // TAB ROW
  [
    { label: "Tab", code: "Tab", size: "large" },
    { label: "Q", code: "KeyQ" },
    { label: "W", code: "KeyW" },
    { label: "E", code: "KeyE" },
    { label: "R", code: "KeyR" },
    { label: "T", code: "KeyT" },
    { label: "Y", code: "KeyY" },
    { label: "U", code: "KeyU" },
    { label: "I", code: "KeyI" },
    { label: "O", code: "KeyO" },
    { label: "P", code: "KeyP" },
    { label: "[ {", code: "BracketLeft" },
    { label: "] }", code: "BracketRight" },
    { label: "\\ |", code: "Backslash", size: "xlarge" },
    { label: "PgUp", code: "PageUp", size: "xl" },
    
  ],

  // CAPS ROW
  [
    { label: "Caps", code: "CapsLock", size: "xlarge" },
    { label: "A", code: "KeyA" },
    { label: "S", code: "KeyS" },
    { label: "D", code: "KeyD" },
    { label: "F", code: "KeyF" },
    { label: "G", code: "KeyG" },
    { label: "H", code: "KeyH" },
    { label: "J", code: "KeyJ" },
    { label: "K", code: "KeyK" },
    { label: "L", code: "KeyL" },
    { label: "; :", code: "Semicolon" },
    { label: "' \"", code: "Quote" },
    { label: "Enter", code: "Enter", size: "xxl" },
    { label: "PgDn", code: "PageDown", size: "xl" },
    
  ],

  // SHIFT ROW
  [
    { label: "Shift", code: "ShiftLeft", size: "xxl" },
    { label: "Z", code: "KeyZ" },
    { label: "X", code: "KeyX" },
    { label: "C", code: "KeyC" },
    { label: "V", code: "KeyV" },
    { label: "B", code: "KeyB" },
    { label: "N", code: "KeyN" },
    { label: "M", code: "KeyM" },
    { label: ", <", code: "Comma" },
    { label: ". >", code: "Period" },
    { label: "/ ?", code: "Slash" },
    { label: "Shift", code: "ShiftRight", size: "xxl" },
    { label: "End", code: "End", size: "xl" },

  ],

  // CONTROL ROW
  [
    { label: "Ctrl", code: "ControlLeft", size: "lg" },
    { label: "Win", code: "MetaLeft", size: "lg" },
    { label: "Alt", code: "AltLeft", size: "lg" },
    { label: "Space", code: "Space", size: "space" },
    { label: "Alt", code: "AltRight", size: "lg" },
    { label: "Ctrl", code: "ControlRight", size: "lg" },
    { label: "←", code: "ArrowLeft" },
    { label: "↑", code: "ArrowUp" },
    { label: "↓", code: "ArrowDown" },
    { label: "→", code: "ArrowRight" },
  ],
];


function App() {
  const [activeKey, setActiveKey] = useState(null);
  const [lastKey, setLastKey] = useState("");

  useEffect(() => {
    const handleKeyDown = (e) => {
      setActiveKey(e.code);
      setLastKey(e.code); // store last pressed key
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div className="keyboard">
      {keys.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((key, index) => (
            <div
              key={index}
              className={`key ${key.size || ""} ${
                activeKey === key.code ? "active" : ""
              }`}
            >
              {key.label}
            </div>
          ))}
        </div>
      ))}
      <h1 className="pressed-key">
         Key Pressed: <span className="text-red-600">{lastKey}</span>
      </h1>
    </div>
  );
}

export default App;
