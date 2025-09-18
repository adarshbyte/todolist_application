import React from "react";
import { generateUniqueId } from "../utils";

const Input = (props) => {
  const { setTodos } = props;
  const [textInput, setTextInput] = React.useState("");
  const inputRef = React.useRef(null);
  const handleSave = () => {
    if (textInput.length === 0) {
      return;
    }
    setTodos((prev) => {
      return [
        ...prev,
        { text: textInput, id: generateUniqueId(), checked: false },
      ];
    });
    setTextInput("");
    inputRef.current.focus();
  };
  const handleChangeText = (e) => {
    setTextInput(e.target.value);
  };
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="inputContainer">
      <textarea
        ref={inputRef}
        value={textInput}
        onChange={handleChangeText}
        cols={20}
        rows={20}
        placeholder="Add a new todo..."
      />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
export default Input;
